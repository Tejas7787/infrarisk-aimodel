/**
 * AI Service Layer — real inference pipeline for infrastructure defect detection
 *
 * Road images: YOLOv8 ONNX model (RDD2022-trained) via ONNX Runtime Web.
 *   - Loads from /models/road-yolov8.onnx (must be present)
 *   - Detects: D00 (Longitudinal Crack), D10 (Transverse Crack),
 *             D20 (Alligator Crack), D40 (Pothole)
 *   - Runs entirely in the browser, no external API required
 *
 * Bridge images: YOLOv8 ONNX model via ONNX Runtime Web.
 *   - Loads from /models/bridge-yolov8.onnx (must be present)
 *   - Detects: Crack
 *   - Runs entirely in the browser, no external API required
 *
 * If an ONNX model file is missing, the UI clearly states
 * "Real AI model not connected" — no fake results are generated.
 */

import type { InfraType, SeverityLevel } from "./types";
import {
  calculateRisk,
  type RiskResult,
  type DetectionInput,
} from "./risk-engine";
import {
  runInference,
  isModelAvailable,
  getModelStatus,
  getLoadedSource,
  invalidateModelCache,
  RDD2022_INTERNAL_NAMES,
  RDD2022_LABELS,
  ROAD_MODEL_CONFIG,
  BRIDGE_MODEL_CONFIG,
  type ModelConfig,
  type RawDetection,
} from "./yolo-inference";

export interface DetectedDefect {
  defectType: string;
  confidence: number;
  severity: SeverityLevel;
  bboxX?: number;
  bboxY?: number;
  bboxWidth?: number;
  bboxHeight?: number;
  description?: string;
}

export interface AnalysisResult {
  success: boolean;
  defects: DetectedDefect[];
  risk: RiskResult;
  processingTimeMs: number;
  modelVersion: string;
  modelNote: string;
  modelConnected: boolean;
  inferenceDetails?: string[];
}

// ---------------------------------------------------------------------------
// Road defect severity (RDD2022-trained model)
// ---------------------------------------------------------------------------

const ROAD_BASE_SEVERITY: Record<string, SeverityLevel> = {
  longitudinal_crack: "medium",
  transverse_crack: "medium",
  alligator_crack: "high",
  pothole: "high",
};

function estimateRoadSeverity(
  defectType: string,
  confidence: number,
  bboxArea: number,
  imageArea: number
): SeverityLevel {
  const severityOrder: SeverityLevel[] = ["low", "medium", "high", "critical"];
  const base = ROAD_BASE_SEVERITY[defectType] ?? "medium";
  let idx = severityOrder.indexOf(base);

  // High confidence elevates severity
  if (confidence > 0.85) idx = Math.min(idx + 1, 3);
  // Large defect relative to image elevates severity
  const areaRatio = bboxArea / imageArea;
  if (areaRatio > 0.08) idx = Math.min(idx + 1, 3);

  return severityOrder[idx];
}

// ---------------------------------------------------------------------------
// Road analysis: YOLOv8 ONNX (RDD2022-trained)
// ---------------------------------------------------------------------------

async function analyzeRoad(
  imageEl: HTMLImageElement
): Promise<{ defects: DetectedDefect[]; details: string[] }> {
  const modelAvailable = await isModelAvailable(ROAD_MODEL_CONFIG);
  if (!modelAvailable) {
    throw new Error("MODEL_NOT_CONNECTED");
  }

  const rawDetections = await runInference(imageEl, ROAD_MODEL_CONFIG);
  const imageArea = imageEl.naturalWidth * imageEl.naturalHeight;

  const defects: DetectedDefect[] = rawDetections.map((det: RawDetection) => {
    const internalName = RDD2022_INTERNAL_NAMES[det.className as keyof typeof RDD2022_INTERNAL_NAMES] ?? det.className;
    const bboxArea = det.bbox.width * det.bbox.height;

    const label =
      RDD2022_LABELS[det.className as keyof typeof RDD2022_LABELS] ?? det.className;

    return {
      defectType: internalName,
      confidence: det.confidence,
      severity: estimateRoadSeverity(internalName, det.confidence, bboxArea, imageArea),
      bboxX: Math.round(det.bbox.x),
      bboxY: Math.round(det.bbox.y),
      bboxWidth: Math.round(det.bbox.width),
      bboxHeight: Math.round(det.bbox.height),
      description: `${label} detected with ${(det.confidence * 100).toFixed(1)}% confidence.`,
    };
  });

  const detectedClasses = [...new Set(defects.map((d) => d.defectType))];
  const source = getLoadedSource(ROAD_MODEL_CONFIG);
  const sourceLabel = source === "uploaded" ? "Custom (browser storage)" : "Bundled application asset";
  const details: string[] = [
    `Model: YOLOv8s (RDD2022 road-damage, 4 classes)`,
    `Source: ${sourceLabel}`,
    `Input: ${imageEl.naturalWidth}×${imageEl.naturalHeight}px`,
    `Detections (post-NMS): ${rawDetections.length}`,
    `Classes detected: ${detectedClasses.length > 0 ? detectedClasses.join(", ") : "none"}`,
  ];

  return { defects, details };
}

// ---------------------------------------------------------------------------
// Bridge analysis: YOLOv8 ONNX (crack detection)
// ---------------------------------------------------------------------------

/** Severity estimation for bridge crack detections */
function estimateBridgeSeverity(
  confidence: number,
  bboxArea: number,
  imageArea: number
): SeverityLevel {
  const severityOrder: SeverityLevel[] = ["low", "medium", "high", "critical"];
  let idx = 0; // start at "low"

  // High confidence elevates severity
  if (confidence > 0.85) idx = Math.min(idx + 1, 3); // → medium
  if (confidence > 0.95) idx = Math.min(idx + 1, 3); // → high

  // Large crack relative to image elevates severity
  const areaRatio = bboxArea / imageArea;
  if (areaRatio > 0.1) idx = Math.min(idx + 1, 3);
  if (areaRatio > 0.25) idx = Math.min(idx + 1, 3);

  return severityOrder[Math.min(idx, 3)];
}

async function analyzeBridge(
  imageEl: HTMLImageElement
): Promise<{ defects: DetectedDefect[]; details: string[] }> {
  const modelAvailable = await isModelAvailable(BRIDGE_MODEL_CONFIG);
  if (!modelAvailable) {
    throw new Error("MODEL_NOT_CONNECTED");
  }

  const rawDetections = await runInference(imageEl, BRIDGE_MODEL_CONFIG);
  const imageArea = imageEl.naturalWidth * imageEl.naturalHeight;

  const defects: DetectedDefect[] = rawDetections.map((det: RawDetection) => {
    const bboxArea = det.bbox.width * det.bbox.height;
    const label =
      BRIDGE_MODEL_CONFIG.labels[det.className] ?? det.className;

    return {
      defectType: "crack", // bridge model detects cracks
      confidence: det.confidence,
      severity: estimateBridgeSeverity(det.confidence, bboxArea, imageArea),
      bboxX: Math.round(det.bbox.x),
      bboxY: Math.round(det.bbox.y),
      bboxWidth: Math.round(det.bbox.width),
      bboxHeight: Math.round(det.bbox.height),
      description: `${label} detected with ${(det.confidence * 100).toFixed(1)}% confidence.`,
    };
  });

  const source = getLoadedSource(BRIDGE_MODEL_CONFIG);
  const sourceLabel = source === "uploaded" ? "Custom (browser storage)" : "Bundled application asset";
  const details: string[] = [
    `Model: YOLOv8n (crack detection, 1 class)`,
    `Source: ${sourceLabel}`,
    `Input: ${imageEl.naturalWidth}×${imageEl.naturalHeight}px`,
    `Detections (post-NMS): ${rawDetections.length}`,
    `Classes detected: ${defects.length > 0 ? "Crack" : "none"}`,
  ];

  return { defects, details };
}

// ---------------------------------------------------------------------------
// Public entrypoint
// ---------------------------------------------------------------------------

export async function analyzeInfrastructure(
  infraType: InfraType,
  imageData: string,
  previousInspections: number = 0
): Promise<AnalysisResult> {
  const startTime = Date.now();

  try {
    const imageEl = await loadImageFromDataUrl(imageData);

    if (infraType === "road") {
      const result = await analyzeRoad(imageEl);
      const detections: DetectionInput[] = result.defects.map((d) => ({
        defectType: d.defectType,
        confidence: d.confidence,
        severity: d.severity,
      }));
      const risk = calculateRisk(detections, infraType, previousInspections);

      return {
        success: true,
        defects: result.defects,
        risk,
        processingTimeMs: Date.now() - startTime,
        modelVersion: "yolov8s-rdd2022-v1",
        modelNote:
          "This analysis uses a YOLOv8s model trained on the RDD2022 road-damage dataset, " +
          "running in the browser via ONNX Runtime Web. " +
          "Results should be verified by a qualified infrastructure professional.",
        modelConnected: true,
        inferenceDetails: result.details,
      };
    }

    if (infraType === "bridge") {
      const result = await analyzeBridge(imageEl);
      const detections: DetectionInput[] = result.defects.map((d) => ({
        defectType: d.defectType,
        confidence: d.confidence,
        severity: d.severity,
      }));
      const risk = calculateRisk(detections, infraType, previousInspections);

      return {
        success: true,
        defects: result.defects,
        risk,
        processingTimeMs: Date.now() - startTime,
        modelVersion: "yolov8n-bridge-crack-v1",
        modelNote:
          "This analysis uses a YOLOv8n model for bridge crack detection, " +
          "running in the browser via ONNX Runtime Web. " +
          "Results should be verified by a qualified infrastructure professional.",
        modelConnected: true,
        inferenceDetails: result.details,
      };
    }

    throw new Error("MODULE_NOT_AVAILABLE");
  } catch (error) {
    const risk = calculateRisk([], infraType, previousInspections);
    const errorMsg = error instanceof Error ? error.message : "Unknown error";

    return {
      success: false,
      defects: [],
      risk,
      processingTimeMs: Date.now() - startTime,
      modelVersion: "n/a",
      modelNote: errorMsg,
      modelConnected: false,
      inferenceDetails: getModelNotConnectedDetails(infraType, errorMsg),
    };
  }
}

function getModelNotConnectedDetails(
  infraType: InfraType,
  errorMsg: string
): string[] {
  if (infraType === "road") {
    if (errorMsg === "MODEL_NOT_CONNECTED") {
      return [
        "AI model unavailable.",
        "",
        "The road defect detection model could not be loaded.",
        "",
        "Expected location: /models/road-yolov8.onnx",
        "",
        "The ONNX model file must be present as a bundled application asset.",
        "Contact the administrator to restore the model file.",
      ];
    }
    return [`Road analysis error: ${errorMsg}`];
  }

  if (infraType === "bridge") {
    if (errorMsg === "MODEL_NOT_CONNECTED") {
      return [
        "AI model unavailable.",
        "",
        "The bridge crack detection model could not be loaded.",
        "",
        "Expected location: /models/bridge-yolov8.onnx",
        "",
        "The ONNX model file must be present as a bundled application asset.",
        "Contact the administrator to restore the model file.",
      ];
    }
    return [`Bridge analysis error: ${errorMsg}`];
  }

  return [
    `The ${infraType} detection module is not yet supported.`,
    "",
    "Currently supported infrastructure types:",
    "  - Road: YOLOv8s (RDD2022-trained, ONNX model required)",
    "  - Bridge: YOLOv8n (crack detection, ONNX model required)",
  ];
}

// ---------------------------------------------------------------------------
// Model status — checks both road and bridge models
// ---------------------------------------------------------------------------

export async function getModelStatuses(): Promise<{
  road: Awaited<ReturnType<typeof getModelStatus>>;
  bridge: Awaited<ReturnType<typeof getModelStatus>>;
}> {
  const [road, bridge] = await Promise.all([
    getModelStatus(ROAD_MODEL_CONFIG),
    getModelStatus(BRIDGE_MODEL_CONFIG),
  ]);
  return { road, bridge };
}

/** Legacy: get only road model status (used by Inspect.tsx) */
export async function getRoadModelStatus() {
  return getModelStatus(ROAD_MODEL_CONFIG);
}

/** Get bridge model status */
export async function getBridgeModelStatus() {
  return getModelStatus(BRIDGE_MODEL_CONFIG);
}

/** Force-reload model on next inference (call after uploading a new ONNX) */
export { invalidateModelCache };

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function loadImageFromDataUrl(dataUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image for inference"));
    img.src = dataUrl;
  });
}
