/**
 * AI Service Layer — real inference pipeline for infrastructure defect detection
 *
 * Uses Hugging Face Transformers.js with DETR-ResNet-50 for object detection.
 * The model runs entirely in the browser via ONNX Runtime Web (WASM backend).
 *
 * For road images: detects objects (vehicles, people, infrastructure) that indicate
 * road condition, usage patterns, and potential hazards.
 *
 * For bridge images: detects structural elements, vehicles, and indicators of
 * bridge condition.
 *
 * This layer is designed so domain-specific fine-tuned models (RDD2022, GYU-DET)
 * can be plugged in without rewriting the application.
 */

import type { InfraType, SeverityLevel } from "./types";
import {
  calculateRisk,
  type RiskResult,
  type DetectionInput,
} from "./risk-engine";
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
// Severity estimation from detection properties
// ---------------------------------------------------------------------------

/**
 * Map COCO detection categories to base severity levels.
 * Higher-risk categories (hazards, heavy traffic) get higher base severity.
 */
const CATEGORY_BASE_SEVERITY: Record<string, SeverityLevel> = {
  hazard: "high",
  safety: "medium",
  usage: "low",
  infrastructure: "low",
  surface: "medium",
  general: "low",
};

function estimateSeverity(
  defectType: string,
  category: string,
  confidence: number,
  bboxArea: number,
  imageArea: number
): SeverityLevel {
  const severityOrder: SeverityLevel[] = ["low", "medium", "high", "critical"];

  // Start with category-based severity
  const base = CATEGORY_BASE_SEVERITY[category] ?? "low";
  let idx = severityOrder.indexOf(base);

  // High confidence elevates severity
  if (confidence > 0.85) idx = Math.min(idx + 1, 3);
  if (confidence > 0.95) idx = Math.min(idx + 1, 3);

  // Large detection relative to image elevates severity
  const areaRatio = bboxArea / imageArea;
  if (areaRatio > 0.15) idx = Math.min(idx + 1, 3);
  if (areaRatio > 0.3) idx = Math.min(idx + 1, 3);

  // Heavy traffic evidence elevates severity
  if (defectType === "heavy_traffic_evidence") idx = Math.min(idx + 1, 3);

  return severityOrder[Math.min(idx, 3)];
}

// ---------------------------------------------------------------------------
// Infrastructure-specific analysis using real HF inference
// ---------------------------------------------------------------------------

async function analyzeInfrastructureImage(
  imageData: string,
  imageEl: HTMLImageElement,
  infraType: InfraType
): Promise<{ defects: DetectedDefect[]; details: string[] }> {
  // Run real DETR inference via Hugging Face Transformers.js
  const result = await runHFInference(imageEl);

  const imageArea = imageEl.naturalWidth * imageEl.naturalHeight;

  // Convert infrastructure-mapped detections to DetectedDefect format
  const defects: DetectedDefect[] = result.detections.map((det: InfraDetection) => {
    const bboxArea = det.bboxWidth * det.bboxHeight;
    return {
      defectType: det.defectType,
      confidence: det.confidence,
      severity: estimateSeverity(
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
      description: buildDetectionDescription(det, infraType),
    };
  });

  const details: string[] = [
    `Model: DETR-ResNet-50 (facebook/detr-resnet-50, COCO 80 classes)`,
    `Runtime: ONNX Runtime Web (WASM, runs in browser)`,
    `Input: ${imageEl.naturalWidth}×${imageEl.naturalHeight}px`,
    `Raw detections: ${result.rawCount}`,
    `Filtered detections: ${result.detections.length}`,
    `Classes found: ${[...new Set(result.detections.map((d) => d.label))].join(", ") || "none"}`,
    ``,
    `Note: This model detects general objects from COCO.`,
    `For infrastructure-specific defect detection (cracks, potholes),`,
    `fine-tune on RDD2022 (roads) or GYU-DET (bridges).`,
  ];

  return { defects, details };
}

// ---------------------------------------------------------------------------
// Detection description builder
// ---------------------------------------------------------------------------

function buildDetectionDescription(det: InfraDetection, infraType: InfraType): string {
  const confidence = `${(det.confidence * 100).toFixed(0)}%`;

  switch (det.category) {
    case "usage":
      return `Detected ${det.label} (confidence: ${confidence}). Indicates ${infraType} usage and traffic load.`;
    case "safety":
      return `Detected ${det.label} (confidence: ${confidence}). Pedestrian/safety-relevant presence in the ${infraType} environment.`;
    case "hazard":
      return `Detected ${det.label} (confidence: ${confidence}). Potential hazard or construction zone indicator.`;
    case "infrastructure":
      return `Detected ${det.label} (confidence: ${confidence}). Infrastructure element present in the scene.`;
    case "surface":
      return `Detected ${det.label} (confidence: ${confidence}). Possible surface-level item or debris.`;
    default:
      return `Detected ${det.label} (confidence: ${confidence}). Object observed in the ${infraType} environment.`;
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
    // Load the image into an HTMLImageElement for inference
    const imageEl = await loadImageFromDataUrl(imageData);

    // Run real inference for all supported infrastructure types
    if (infraType === "road" || infraType === "bridge") {
      const result = await analyzeInfrastructureImage(imageData, imageEl, infraType);

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
          "The model detects general objects relevant to infrastructure assessment. " +
          "Results should be verified by a qualified infrastructure professional. " +
          "For defect-specific detection, a model fine-tuned on RDD2022 (roads) or GYU-DET (bridges) is recommended.",
        modelConnected: true,
        inferenceDetails: result.details,
      };
    }

    // Tunnel, water, power — not yet supported
    throw new Error("MODULE_NOT_AVAILABLE");
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Unknown error";

    // Check if this is a model loading failure (network/CORS/etc.)
    const isModelFailure =
      errorMsg.includes("fetch") ||
      errorMsg.includes("network") ||
      errorMsg.includes("加载") ||
      errorMsg.includes("load") ||
      errorMsg.includes("ONNX") ||
      errorMsg.includes("transformers") ||
      errorMsg.includes("MODULE_NOT_AVAILABLE");

    const risk = calculateRisk([], infraType, previousInspections);

    return {
      success: false,
      defects: [],
      risk,
      processingTimeMs: Date.now() - startTime,
      modelVersion: "n/a",
      modelNote: errorMsg,
      modelConnected: false,
      inferenceDetails: getModelNotConnectedDetails(infraType, errorMsg, isModelFailure),
    };
  }
}

function getModelNotConnectedDetails(
  infraType: InfraType,
  errorMsg: string,
  isModelFailure: boolean
): string[] {
  if (infraType !== "road" && infraType !== "bridge") {
    return [
      `The ${infraType} detection module is not yet supported.`,
      "",
      `To enable ${infraType} analysis:`,
      `1. Train an object-detection model on the relevant dataset`,
      `2. Export to ONNX format or connect via Hugging Face Transformers.js`,
      `3. Add a detection adapter in src/lib/ai-service.ts`,
      "",
      "Currently, road and bridge analysis use DETR-ResNet-50 (COCO).",
    ];
  }

  if (isModelFailure) {
    return [
      "AI model could not be loaded.",
      "",
      "The DETR model requires network access to load from Hugging Face Hub.",
      "This may be due to:",
      "  - No internet connection",
      "  - CORS restrictions in the browser",
      "  - Hugging Face Hub being temporarily unavailable",
      "",
      "To fix:",
      "  1. Check your internet connection",
      "  2. Refresh the page and try again",
      "  3. For offline inference, train a YOLOv8 model and place the",
      "     .onnx file at: public/models/road-yolov8.onnx",
      "",
      "For production deployment:",
      "  - Train YOLOv8n on RDD2022: yolo train model=yolov8n.pt data=rdd2022.yaml",
      "  - Export: yolo export model=best.pt format=onnx opset=12",
      "  - Place at public/models/road-yolov8.onnx",
      "",
      "This removes the dependency on Hugging Face Hub for inference.",
    ];
  }

  return [`Analysis error: ${errorMsg}`];
}

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

// Re-export getHFModelStatus for use in UI
export { getHFModelStatus };
