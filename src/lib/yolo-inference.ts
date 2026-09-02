/**
 * YOLOv8 Inference Engine for Road Defect Detection
 *
 * Runs a YOLOv8 ONNX model in the browser via ONNX Runtime Web (WASM backend).
 * Targets the RDD2022 road-damage dataset class labels.
 *
 * Model requirements:
 *   - Format: YOLOv8 ONNX export (opset 12+, dynamic or fixed input)
 *   - Input: float32 NCHW tensor, normalized to [0,1], resized to MODEL_SIZE
 *   - Output: float32 tensor of shape [1, num_classes + 4, num_detections]
 *
 * To connect a real model:
 *   1. Train YOLOv8n on the RDD2022 dataset (4 classes)
 *   2. Export: yolo export model=best.pt format=onnx opset=12 imgsz=640
 *   3. Place the .onnx file in public/models/road-yolov8.onnx
 */

import * as ort from "onnxruntime-web";

// ---------------------------------------------------------------------------
// RDD2022 class labels (4-class road damage detection)
// https://github.com/ai4civilengineering/RDD2022
// ---------------------------------------------------------------------------
export const RDD2022_CLASSES = [
  "D00", // Longitudinal crack
  "D10", // Transverse crack
  "D20", // Alligator crack
  "D40", // Pothole
] as const;

export type RDD2022Class = (typeof RDD2022_CLASSES)[number];

export const RDD2022_LABELS: Record<RDD2022Class, string> = {
  D00: "Longitudinal Crack",
  D10: "Transverse Crack",
  D20: "Alligator Crack",
  D40: "Pothole",
};

export const RDD2022_INTERNAL_NAMES: Record<RDD2022Class, string> = {
  D00: "longitudinal_crack",
  D10: "transverse_crack",
  D20: "alligator_crack",
  D40: "pothole",
};

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
const MODEL_SIZE = 640; // YOLOv8 default input size
const CONFIDENCE_THRESHOLD = 0.25;
const IOU_THRESHOLD = 0.45;

const MODEL_URL = "/models/road-yolov8.onnx";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface RawDetection {
  classId: number;
  className: RDD2022Class;
  confidence: number;
  bbox: { x: number; y: number; width: number; height: number }; // pixels in original image
}

// ---------------------------------------------------------------------------
// Model singleton
// ---------------------------------------------------------------------------
let sessionPromise: Promise<ort.InferenceSession> | null = null;

async function getModelSession(): Promise<ort.InferenceSession> {
  if (!sessionPromise) {
    sessionPromise = (async () => {
      // Check if model file exists
      const resp = await fetch(MODEL_URL, { method: "HEAD" });
      if (!resp.ok) {
        throw new Error(
          `MODEL_NOT_FOUND: ${MODEL_URL} — ` +
            `Place your YOLOv8 ONNX model trained on RDD2022 at this path. ` +
            `Export with: yolo export model=best.pt format=onnx opset=12 imgsz=640`
        );
      }

      ort.env.wasm.numThreads = navigator.hardwareConcurrency || 4;

      const modelBytes = await fetch(MODEL_URL).then((r) => r.arrayBuffer());
      const session = await ort.InferenceSession.create(modelBytes, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all",
      });

      return session;
    })();

    // Reset on failure so next attempt retries
    sessionPromise.catch(() => {
      sessionPromise = null;
    });
  }
  return sessionPromise;
}

// ---------------------------------------------------------------------------
// Image preprocessing: resize + normalize to NCHW float32
// ---------------------------------------------------------------------------
function preprocessImage(
  imageSource: HTMLImageElement | HTMLCanvasElement,
  targetSize: number
): { tensor: ort.Tensor; pad: { padX: number; padY: number; scale: number } } {
  const canvas = document.createElement("canvas");
  canvas.width = targetSize;
  canvas.height = targetSize;
  const ctx = canvas.getContext("2d")!;

  // Fill with grey letterbox
  ctx.fillStyle = "#808080";
  ctx.fillRect(0, 0, targetSize, targetSize);

  const srcW = imageSource instanceof HTMLImageElement
    ? imageSource.naturalWidth
    : imageSource.width;
  const srcH = imageSource instanceof HTMLImageElement
    ? imageSource.naturalHeight
    : imageSource.height;

  const scale = Math.min(targetSize / srcW, targetSize / srcH);
  const newW = srcW * scale;
  const newH = srcH * scale;
  const padX = (targetSize - newW) / 2;
  const padY = (targetSize - newH) / 2;

  ctx.drawImage(imageSource, padX, padY, newW, newH);

  const imageData = ctx.getImageData(0, 0, targetSize, targetSize);
  const pixels = imageData.data;

  // HWC -> CHW, normalize to [0,1], BGR -> RGB
  const chw = new Float32Array(3 * targetSize * targetSize);
  for (let i = 0; i < targetSize * targetSize; i++) {
    const r = pixels[i * 4] / 255.0;
    const g = pixels[i * 4 + 1] / 255.0;
    const b = pixels[i * 4 + 2] / 255.0;
    chw[i] = r; // R channel
    chw[targetSize * targetSize + i] = g; // G channel
    chw[2 * targetSize * targetSize + i] = b; // B channel
  }

  const tensor = new ort.Tensor("float32", chw, [1, 3, targetSize, targetSize]);
  return { tensor, pad: { padX, padY, scale } };
}

// ---------------------------------------------------------------------------
// Non-Maximum Suppression
// ---------------------------------------------------------------------------
function computeIoU(
  a: { x: number; y: number; width: number; height: number },
  b: { x: number; y: number; width: number; height: number }
): number {
  const x1 = Math.max(a.x, b.x);
  const y1 = Math.max(a.y, b.y);
  const x2 = Math.min(a.x + a.width, b.x + b.width);
  const y2 = Math.min(a.y + a.height, b.y + b.height);
  const intersection = Math.max(0, x2 - x1) * Math.max(0, y2 - y1);
  const areaA = a.width * a.height;
  const areaB = b.width * b.height;
  const union = areaA + areaB - intersection;
  return union > 0 ? intersection / union : 0;
}

function nms(detections: RawDetection[], iouThreshold: number): RawDetection[] {
  // Sort by confidence descending
  const sorted = [...detections].sort((a, b) => b.confidence - a.confidence);
  const keep: RawDetection[] = [];
  const suppressed = new Set<number>();

  for (let i = 0; i < sorted.length; i++) {
    if (suppressed.has(i)) continue;
    keep.push(sorted[i]);

    for (let j = i + 1; j < sorted.length; j++) {
      if (suppressed.has(j)) continue;
      if (sorted[i].classId === sorted[j].classId) {
        const iou = computeIoU(sorted[i].bbox, sorted[j].bbox);
        if (iou > iouThreshold) {
          suppressed.add(j);
        }
      }
    }
  }

  return keep;
}

// ---------------------------------------------------------------------------
// Post-processing: extract detections from YOLOv8 raw output
// ---------------------------------------------------------------------------
function postprocess(
  outputTensor: ort.Tensor,
  pad: { padX: number; padY: number; scale: number },
  origW: number,
  origH: number,
  confThreshold: number,
  iouThreshold: number
): RawDetection[] {
  const data = outputTensor.data as Float32Array;
  const shape = outputTensor.dims;

  // YOLOv8 output: [1, 4 + numClasses, numDetections]
  const numClasses = RDD2022_CLASSES.length;
  const numDetections = shape[2];

  const raw: RawDetection[] = [];

  for (let d = 0; d < numDetections; d++) {
    // Extract center_x, center_y, width, height (in MODEL_SIZE coords)
    const cx = data[0 * numDetections + d];
    const cy = data[1 * numDetections + d];
    const w = data[2 * numDetections + d];
    const h = data[3 * numDetections + d];

    // Find best class
    let bestClass = 0;
    let bestScore = 0;
    for (let c = 0; c < numClasses; c++) {
      const score = data[(4 + c) * numDetections + d];
      if (score > bestScore) {
        bestScore = score;
        bestClass = c;
      }
    }

    if (bestScore < confThreshold) continue;

    // Convert from MODEL_SIZE center format to original pixel coordinates
    // Remove padding offset, then scale back to original image
    const x = ((cx - pad.padX) / pad.scale);
    const y = ((cy - pad.padY) / pad.scale);
    const bw = w / pad.scale;
    const bh = h / pad.scale;

    // Clip to image bounds
    const x1 = Math.max(0, Math.min(x - bw / 2, origW));
    const y1 = Math.max(0, Math.min(y - bh / 2, origH));
    const x2 = Math.max(0, Math.min(x + bw / 2, origW));
    const y2 = Math.max(0, Math.min(y + bh / 2, origH));

    raw.push({
      classId: bestClass,
      className: RDD2022_CLASSES[bestClass],
      confidence: bestScore,
      bbox: { x: x1, y: y1, width: x2 - x1, height: y2 - y1 },
    });
  }

  return nms(raw, iouThreshold);
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Check if the model file is available at the expected path */
export async function isModelAvailable(): Promise<boolean> {
  try {
    const resp = await fetch(MODEL_URL, { method: "HEAD" });
    return resp.ok;
  } catch {
    return false;
  }
}

/** Get the model status message */
export async function getModelStatus(): Promise<{
  available: boolean;
  message: string;
  details: string[];
}> {
  const available = await isModelAvailable();
  if (available) {
    return {
      available: true,
      message: "RDD2022 road-damage model loaded",
      details: [
        "YOLOv8 ONNX model detected at /models/road-yolov8.onnx",
        "Classes: Longitudinal Crack, Transverse Crack, Alligator Crack, Pothole",
      ],
    };
  }
  return {
    available: false,
    message: "Real AI model not connected yet",
    details: [
      "No YOLOv8 ONNX model found at /models/road-yolov8.onnx",
      "",
      "To connect the real model:",
      "1. Train YOLOv8n on the RDD2022 road-damage dataset",
      "   - Dataset: https://github.com/ai4civilengineering/RDD2022",
      "   - Classes: D00 (Longitudinal), D10 (Transverse), D20 (Alligator), D40 (Pothole)",
      "2. Export to ONNX:  yolo export model=best.pt format=onnx opset=12 imgsz=640",
      "3. Place the exported file at: public/models/road-yolov8.onnx",
      "",
      "Bridge module requires a separate model trained on GYU-DET.",
      "Tunnel, Water, and Power modules are planned for future development.",
    ],
  };
}

/**
 * Run YOLOv8 inference on an image element.
 * Returns raw detections before severity/risk scoring.
 */
export async function runInference(
  imageSource: HTMLImageElement | HTMLCanvasElement
): Promise<RawDetection[]> {
  const session = await getModelSession();

  const origW = imageSource instanceof HTMLImageElement
    ? imageSource.naturalWidth
    : imageSource.width;
  const origH = imageSource instanceof HTMLImageElement
    ? imageSource.naturalHeight
    : imageSource.height;

  // Preprocess
  const { tensor, pad } = preprocessImage(imageSource, MODEL_SIZE);

  // Run inference
  const inputName = session.inputNames[0];
  const results = await session.run({ [inputName]: tensor });
  const outputName = session.outputNames[0];
  const outputTensor = results[outputName];

  // Postprocess
  const detections = postprocess(
    outputTensor,
    pad,
    origW,
    origH,
    CONFIDENCE_THRESHOLD,
    IOU_THRESHOLD
  );

  return detections;
}
