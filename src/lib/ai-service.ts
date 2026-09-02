// AI Service Layer — modular model adapters for infrastructure defect detection
// This layer is designed so real computer-vision models can be plugged in
// without rewriting the application.

import type { InfraType, SeverityLevel } from "./types";
import { calculateRisk, type RiskResult, type DetectionInput } from "./risk-engine";

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
}

// Abstract model adapter interface
export interface ModelAdapter {
  infraType: InfraType;
  modelName: string;
  modelVersion: string;
  analyze(imageData: string): Promise<DetectedDefect[]>;
}

// Road detection model adapter (targeting RDD2022)
export class RoadDetectionModel implements ModelAdapter {
  infraType: InfraType = "road";
  modelName = "Road Defect Detection";
  modelVersion = "adapter-v0.1";

  async analyze(_imageData: string): Promise<DetectedDefect[]> {
    // In production, this calls a trained model (e.g., YOLO trained on RDD2022).
    // The adapter interface remains identical regardless of the underlying model.
    //
    // Model integration point:
    //   POST /api/v1/analyze/road
    //   Body: { image: base64_string }
    //   Returns: { detections: [...] }
    throw new Error(
      "Road detection model not yet connected. " +
        "Connect a model trained on the RDD2022 dataset to enable real analysis. " +
        "See /architecture for the integration interface."
    );
  }
}

// Bridge detection model adapter (targeting GYU-DET)
export class BridgeDetectionModel implements ModelAdapter {
  infraType: InfraType = "bridge";
  modelName = "Bridge Defect Detection";
  modelVersion = "adapter-v0.1";

  async analyze(_imageData: string): Promise<DetectedDefect[]> {
    // In production, this calls a trained model (e.g., fine-tuned on GYU-DET).
    throw new Error(
      "Bridge detection model not yet connected. " +
        "Connect a model trained on the GYU-DET dataset to enable real analysis. " +
        "See /architecture for the integration interface."
    );
  }
}

// Model registry — plug in new models here
const MODEL_ADAPTERS: Record<InfraType, ModelAdapter> = {
  road: new RoadDetectionModel(),
  bridge: new BridgeDetectionModel(),
  tunnel: new BridgeDetectionModel(), // placeholder
  water: new BridgeDetectionModel(), // placeholder
  power: new BridgeDetectionModel(), // placeholder
};

export function getModelAdapter(infraType: InfraType): ModelAdapter {
  return MODEL_ADAPTERS[infraType];
}

/**
 * Run full analysis pipeline:
 * 1. Select model adapter
 * 2. Run defect detection
 * 3. Run risk engine
 * 4. Return combined result
 *
 * This is the main entrypoint for the AI service layer.
 */
export async function analyzeInfrastructure(
  infraType: InfraType,
  imageData: string,
  previousInspections: number = 0
): Promise<AnalysisResult> {
  const startTime = Date.now();
  const adapter = getModelAdapter(infraType);

  try {
    const defects = await adapter.analyze(imageData);

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
      modelVersion: adapter.modelVersion,
      modelNote:
        "This analysis is AI-assisted and should be verified by a qualified infrastructure professional.",
    };
  } catch (error) {
    const risk = calculateRisk([], infraType, previousInspections);
    return {
      success: false,
      defects: [],
      risk,
      processingTimeMs: Date.now() - startTime,
      modelVersion: adapter.modelVersion,
      modelNote: `Analysis failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }
}
