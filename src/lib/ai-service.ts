/**
 * AI Service Layer — real inference pipeline for infrastructure defect detection
 *
 * Uses ONNX Runtime Web with YOLOv8 for road defect detection (RDD2022).
 * Bridge, tunnel, water, and power modules require separate models.
 *
 * This layer is designed so real computer-vision models can be plugged in
 * without rewriting the application.
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
  RDD2022_INTERNAL_NAMES,
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
// Severity estimation from confidence + defect type
// ---------------------------------------------------------------------------

// Base severity for each RDD2022 defect class (intrinsic damage potential)
const BASE_SEVERITY: Record<string, SeverityLevel> = {
  longitudinal_crack: "medium",
  transverse_crack: "medium",
  alligator_crack: "high",
  pothole: "high",
};

function estimateSeverity(
  defectType: string,
  confidence: number,
  bboxArea: number,
  imageArea: number
): SeverityLevel {
  const base = BASE_SEVERITY[defectType] ?? "medium";
  const severityOrder: SeverityLevel[] = ["low", "medium", "high", "critical"];
  let idx = severityOrder.indexOf(base);

  // High confidence elevates severity
  if (confidence > 0.85) idx = Math.min(idx + 1, 3);
  // Large defect relative to image elevates severity
  const areaRatio = bboxArea / imageArea;
  if (areaRatio > 0.08) idx = Math.min(idx + 1, 3);

  return severityOrder[idx];
}

// ---------------------------------------------------------------------------
// Road detection (real ONNX inference)
// ---------------------------------------------------------------------------

async function analyzeRoad(
  imageData: string,
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
      severity: estimateSeverity(internalName, det.confidence, bboxArea, imageArea),
      bboxX: Math.round(det.bbox.x),
      bboxY: Math.round(det.bbox.y),
      bboxWidth: Math.round(det.bbox.width),
      bboxHeight: Math.round(det.bbox.height),
    };
  });

  const details: string[] = [
    `Model: YOLOv8 (RDD2022 road-damage, 4 classes)`,
    `Input: ${imageEl.naturalWidth}×${imageEl.naturalHeight}px`,
    `Raw detections (post-NMS): ${rawDetections.length}`,
    `Classes detected: ${[...new Set(defects.map((d) => d.defectType))].join(", ") || "none"}`,
  ];

  return { defects, details };
}

// ---------------------------------------------------------------------------
// Bridge detection (model not connected)
// ---------------------------------------------------------------------------

async function analyzeBridge(): Promise<never> {
  throw new Error("MODEL_NOT_CONNECTED_BRIDGE");
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

    let defects: DetectedDefect[] = [];
    let details: string[] = [];
    let modelConnected = false;

    if (infraType === "road") {
      const result = await analyzeRoad(imageData, imageEl);
      defects = result.defects;
      details = result.details;
      modelConnected = true;
    } else if (infraType === "bridge") {
      // Bridge model not yet connected
      throw new Error("MODEL_NOT_CONNECTED_BRIDGE");
    } else {
      // Other infrastructure types not yet supported
      throw new Error("MODULE_NOT_AVAILABLE");
    }

    const detections: DetectionInput[] = defects.map((d) => ({
      defectType: d.defectType,
      confidence: d.confidence,
      severity: d.severity,
    }));

    const risk = calculateRisk(detections, infraType, previousInspections);

    return {
      success: true,
      defects,
      risk,
      processingTimeMs: Date.now() - startTime,
      modelVersion: "yolov8-rdd2022-v1",
      modelNote:
        "This analysis is AI-assisted and should be verified by a qualified infrastructure professional.",
      modelConnected,
      inferenceDetails: details,
    };
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
  if (infraType !== "road") {
    return [
      `The ${infraType} detection module is not yet connected.`,
      "",
      `To enable ${infraType} analysis:`,
      `1. Train an object-detection model on the relevant dataset`,
      `2. Export to ONNX format`,
      `3. Place at /models/${infraType}-yolov8.onnx`,
      `4. Add a detection adapter in src/lib/ai-service.ts`,
      "",
      "Currently, only road defect detection (RDD2022) has an inference adapter.",
    ];
  }

  if (errorMsg === "MODEL_NOT_CONNECTED") {
    return [
      "Real AI model not connected yet.",
      "",
      "The road defect detection pipeline is fully implemented but requires",
      "a trained YOLOv8 ONNX model to run inference.",
      "",
      "Steps to connect the real model:",
      "1. Get the RDD2022 dataset: https://github.com/ai4civilengineering/RDD2022",
      "   Classes: D00 (Longitudinal Crack), D10 (Transverse Crack),",
      "            D20 (Alligator Crack), D40 (Pothole)",
      "2. Train YOLOv8n:  yolo train model=yolov8n.pt data=rdd2022.yaml epochs=100 imgsz=640",
      "3. Export:  yolo export model=best.pt format=onnx opset=12 imgsz=640",
      "4. Place the .onnx file at: public/models/road-yolov8.onnx",
      "",
      "Once the model file is in place, inference runs entirely in the browser",
      "using ONNX Runtime Web (WASM backend) — no external API required.",
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
