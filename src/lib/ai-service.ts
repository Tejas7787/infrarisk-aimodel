/**
 * AI Service Layer — real inference pipeline for infrastructure defect detection
 *
 * Road images: YOLOv8 ONNX model (RDD2022-trained) via ONNX Runtime Web.
 *   - Loads from /models/road-yolov8.onnx (must be present)
 *   - Detects: D00 (Longitudinal Crack), D10 (Transverse Crack),
 *             D20 (Alligator Crack), D40 (Pothole)
 *   - Runs entirely in the browser, no external API required
 *
 * Bridge images: Hugging Face DETR-ResNet-50 (COCO, 80 classes).
 *   - Loads from Hugging Face Hub via Transformers.js
 *   - Detects general objects relevant to bridge assessment
 *
 * If the road ONNX model file is missing, the UI clearly states
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
  type RawDetection,
} from "./yolo-inference";
import {
  runHFInference,
  getHFModelStatus,
  type InfraDetection,
} from "./hf-inference";

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
  const modelAvailable = await isModelAvailable();
  if (!modelAvailable) {
    throw new Error("MODEL_NOT_CONNECTED");
  }

  const rawDetections = await runInference(imageEl);
  const imageArea = imageEl.naturalWidth * imageEl.naturalHeight;

  const defects: DetectedDefect[] = rawDetections.map((det: RawDetection) => {
    const internalName = RDD2022_INTERNAL_NAMES[det.className] ?? det.className;
    const bboxArea = det.bbox.width * det.bbox.height;

    return {
      defectType: internalName,
      confidence: det.confidence,
      severity: estimateRoadSeverity(internalName, det.confidence, bboxArea, imageArea),
      bboxX: Math.round(det.bbox.x),
      bboxY: Math.round(det.bbox.y),
      bboxWidth: Math.round(det.bbox.width),
      bboxHeight: Math.round(det.bbox.height),
      description: `${RDD2022_LABELS[det.className]} detected with ${(det.confidence * 100).toFixed(1)}% confidence.`,
    };
  });

  const detectedClasses = [...new Set(defects.map((d) => d.defectType))];
  const source = getLoadedSource();
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
// Bridge analysis: Hugging Face DETR (COCO)
// ---------------------------------------------------------------------------

const BRIDGE_CATEGORY_SEVERITY: Record<string, SeverityLevel> = {
  hazard: "high",
  safety: "medium",
  usage: "low",
  infrastructure: "low",
  surface: "medium",
  general: "low",
};

function estimateBridgeSeverity(
  defectType: string,
  category: string,
  confidence: number,
  bboxArea: number,
  imageArea: number
): SeverityLevel {
  const severityOrder: SeverityLevel[] = ["low", "medium", "high", "critical"];
  const base = BRIDGE_CATEGORY_SEVERITY[category] ?? "low";
  let idx = severityOrder.indexOf(base);

  if (confidence > 0.85) idx = Math.min(idx + 1, 3);
  if (confidence > 0.95) idx = Math.min(idx + 1, 3);

  const areaRatio = bboxArea / imageArea;
  if (areaRatio > 0.15) idx = Math.min(idx + 1, 3);
  if (areaRatio > 0.3) idx = Math.min(idx + 1, 3);

  if (defectType === "heavy_traffic_evidence") idx = Math.min(idx + 1, 3);

  return severityOrder[Math.min(idx, 3)];
}

async function analyzeBridge(
  imageEl: HTMLImageElement
): Promise<{ defects: DetectedDefect[]; details: string[] }> {
  const result = await runHFInference(imageEl);
  const imageArea = imageEl.naturalWidth * imageEl.naturalHeight;

  const defects: DetectedDefect[] = result.detections.map((det: InfraDetection) => {
    const bboxArea = det.bboxWidth * det.bboxHeight;
    return {
      defectType: det.defectType,
      confidence: det.confidence,
      severity: estimateBridgeSeverity(
        det.defectType,
        det.category,
        det.confidence,
        bboxArea,
        imageArea
      ),
      bboxX: det.bboxX,
      bboxY: det.bboxY,
      bboxWidth: det.bboxWidth,
      bboxHeight: det.bboxHeight,
      description: buildBridgeDetectionDescription(det),
    };
  });

  const details: string[] = [
    `Model: DETR-ResNet-50 (facebook/detr-resnet-50, COCO 80 classes)`,
    `Runtime: ONNX Runtime Web (WASM, loaded from Hugging Face Hub)`,
    `Input: ${imageEl.naturalWidth}×${imageEl.naturalHeight}px`,
    `Raw detections: ${result.rawCount}`,
    `Filtered (≥0.3): ${result.detections.length}`,
    `Classes found: ${[...new Set(result.detections.map((d) => d.label))].join(", ") || "none"}`,
    ``,
    `Note: This COCO model detects general objects. A bridge-specific`,
    `model trained on GYU-DET would improve defect detection.`,
  ];

  return { defects, details };
}

function buildBridgeDetectionDescription(det: InfraDetection): string {
  const confidence = `${(det.confidence * 100).toFixed(0)}%`;
  switch (det.category) {
    case "usage":
      return `Detected ${det.label} (${confidence}). Indicates bridge usage and traffic load.`;
    case "safety":
      return `Detected ${det.label} (${confidence}). Safety-relevant presence on the bridge.`;
    case "hazard":
      return `Detected ${det.label} (${confidence}). Potential hazard or construction zone indicator.`;
    case "infrastructure":
      return `Detected ${det.label} (${confidence}). Infrastructure element on the bridge.`;
    case "surface":
      return `Detected ${det.label} (${confidence}). Possible surface-level item or debris.`;
    default:
      return `Detected ${det.label} (${confidence}). Object observed in the bridge environment.`;
  }
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
        modelVersion: "detr-resnet-50-coco-v1",
        modelNote:
          "This analysis uses a COCO-pretrained DETR model running in the browser. " +
          "The model detects general objects relevant to bridge assessment. " +
          "Results should be verified by a qualified infrastructure professional. " +
          "For bridge-specific defect detection, a model trained on GYU-DET is recommended.",
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
    return [
      "Bridge analysis requires Hugging Face model loading.",
      "",
      "The DETR model loads from Hugging Face Hub on first use.",
      "Check your internet connection and try again.",
      "",
      "For offline bridge analysis, train a model on GYU-DET",
      "and add an inference adapter.",
    ];
  }

  return [
    `The ${infraType} detection module is not yet supported.`,
    "",
    "Currently supported infrastructure types:",
    "  - Road: YOLOv8s (RDD2022-trained, ONNX model required)",
    "  - Bridge: DETR-ResNet-50 (loaded from Hugging Face Hub)",
  ];
}

// ---------------------------------------------------------------------------
// Model status (road model)
// ---------------------------------------------------------------------------

export async function getRoadModelStatus() {
  return getModelStatus();
}

/** Force-reload model on next inference (call after uploading a new ONNX) */
export { invalidateModelCache };

// Re-export HF model status for bridge
export { getHFModelStatus };

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
