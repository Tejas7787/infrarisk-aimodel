/**
 * YOLOv8 Inference Engine for Road Defect Detection
 *
 * Runs a YOLOv8 ONNX model in the browser via ONNX Runtime Web (WASM backend).
 * Targets the RDD2022 road-damage dataset class labels.
 *
 * Model loading:
 *   The ONNX model is bundled as a static application asset at:
 *     /models/road-yolov8.onnx
 *   It loads automatically on first inference — no user upload required.
 *
 *   An IndexedDB override allows power users to load a custom model.
 *   This is hidden from the normal UI flow.
 *
 * Model requirements:
 *   - Format: YOLOv8 ONNX export (opset 12+, dynamic or fixed input)
 *   - Input: float32 NCHW tensor, normalized to [0,1], resized to MODEL_SIZE
 *   - Output: float32 tensor of shape [1, num_classes + 4, num_detections]
 */

import * as ort from "onnxruntime-web";
import { loadModel as loadFromIDB, isModelStored, ROAD_MODEL_ID as MODEL_ID } from "./model-storage";

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

// Permanent bundled model path (served as a static asset from public/)
const BUNDLED_MODEL_URL = "/models/road-yolov8.onnx";

// A real YOLOv8s ONNX model is tens of MB. Anything below this is a placeholder
// (e.g. an un-materialized Git LFS pointer, which is ~133 bytes) — detect it so
// the UI reports "AI model unavailable" instead of a false "AI model loaded".
const MIN_MODEL_BYTES = 1024 * 1024; // 1 MB

/**
 * Validate that an ArrayBuffer looks like a real ONNX protobuf model.
 * ONNX files start with field 1 (ir_version) varint: byte 0x08 followed by a
 * small version number (e.g. 08 07 = ONNX opset IR v7, emitted by PyTorch).
 * Combined with the minimum size, this reliably rejects HTML error pages and
 * Git LFS pointer files ("version https://git-lfs.github.com/spec/v1\n...").
 */
function isValidOnnxBuffer(buffer: ArrayBuffer): boolean {
  if (buffer.byteLength < MIN_MODEL_BYTES) return false;
  const b = new Uint8Array(buffer, 0, 2);
  return b[0] === 0x08 && b[1] >= 0x02 && b[1] <= 0x0a;
}

/**
 * Lightweight probe of the bundled model file that does NOT download the full
 * body: requests only the first 16 bytes via HTTP Range and validates the ONNX
 * magic bytes plus the declared total size. Falls back to just checking the
 * declared size when the server ignores the Range header.
 */
async function probeBundledModel(): Promise<{
  valid: boolean;
  reachable: boolean;
  totalBytes: number;
}> {
  try {
    const resp = await fetch(BUNDLED_MODEL_URL, {
      headers: { Range: "bytes=0-15" },
    });
    if (!resp.ok) return { valid: false, reachable: false, totalBytes: 0 };

    // Declared size: Content-Range total (206) or Content-Length (Range ignored)
    let totalBytes = 0;
    const contentRange = resp.headers.get("content-range");
    if (contentRange) {
      const match = contentRange.match(/\/(\d+)$/);
      if (match) totalBytes = parseInt(match[1], 10);
    } else {
      totalBytes = Number(resp.headers.get("content-length") ?? "0");
    }

    // Read only the first chunk of the body, then cancel the stream — the
    // server may ignore Range and return the full 44 MB response.
    const reader = resp.body?.getReader();
    if (reader) {
      try {
        const { value } = await reader.read();
        if (value && value.length >= 2) {
          const magicOk =
            value[0] === 0x08 && value[1] >= 0x02 && value[1] <= 0x0a;
          if (!magicOk || (totalBytes > 0 && totalBytes < MIN_MODEL_BYTES)) {
            return { valid: false, reachable: true, totalBytes };
          }
          return { valid: true, reachable: true, totalBytes };
        }
      } finally {
        reader.cancel().catch(() => {});
      }
    }

    // No stream available — fall back to declared size only
    const sizeOk = totalBytes >= MIN_MODEL_BYTES;
    return { valid: sizeOk, reachable: true, totalBytes };
  } catch {
    return { valid: false, reachable: false, totalBytes: 0 };
  }
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface RawDetection {
  classId: number;
  className: RDD2022Class;
  confidence: number;
  bbox: { x: number; y: number; width: number; height: number }; // pixels in original image
}

export type ModelLoadSource = "bundled" | "uploaded" | "none";

// ---------------------------------------------------------------------------
// Model singleton
// ---------------------------------------------------------------------------
let sessionPromise: Promise<ort.InferenceSession> | null = null;
let loadedSource: ModelLoadSource = "none";

async function fetchModelBytes(): Promise<{ bytes: ArrayBuffer; source: ModelLoadSource }> {
  // 1. Try IndexedDB override (power user uploaded a custom model)
  try {
    const stored = await loadFromIDB(MODEL_ID);
    if (stored?.arrayBuffer) {
      if (!isValidOnnxBuffer(stored.arrayBuffer)) {
        console.error(
          `[yolo-inference] Stored model "${MODEL_ID}" is not a valid ONNX file ` +
            `(${stored.arrayBuffer.byteLength} bytes). Ignoring it.`
        );
      } else {
        return { bytes: stored.arrayBuffer, source: "uploaded" };
      }
    }
  } catch {
    // IndexedDB error — fall through
  }

  // 2. Load bundled static asset (the permanent default)
  try {
    const resp = await fetch(BUNDLED_MODEL_URL);
    if (resp.ok) {
      const bytes = await resp.arrayBuffer();
      if (!isValidOnnxBuffer(bytes)) {
        console.error(
          `[yolo-inference] Bundled model at ${BUNDLED_MODEL_URL} is not a valid ` +
            `ONNX file (${bytes.byteLength} bytes) — placeholder or LFS pointer?`
        );
      } else {
        return { bytes, source: "bundled" };
      }
    }
  } catch {
    // File not found
  }

  throw new Error("MODEL_NOT_CONNECTED");
}

async function getModelSession(): Promise<ort.InferenceSession> {
  if (!sessionPromise) {
    sessionPromise = (async () => {
      const { bytes, source } = await fetchModelBytes();
      loadedSource = source;

      // Point ONNX Runtime at the WASM backend files served from public/ort/
      // String form is required for ORT v1.29.0: the JSEP backend module URL is
      // built as new URL("ort-wasm-simd-threaded.jsep.mjs", wasmPaths). With the
      // object form, that base is undefined and the .mjs import resolves against
      // the library's own bundle URL inside node_modules (never served), failing
      // with "no available backend found". The object form's `mjs` key only
      // affects the optional Web Worker proxy path, not this import.
      ort.env.wasm.wasmPaths = "/ort/";
      // Force single-threading: SharedArrayBuffer requires cross-origin isolation
      // headers (COOP/COEP) which may not be present in the dev server.
      ort.env.wasm.numThreads = 1;

      const session = await ort.InferenceSession.create(bytes, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all",
      });

      return session;
    })();

    // Reset on failure so next attempt retries
    sessionPromise.catch(() => {
      sessionPromise = null;
      loadedSource = "none";
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

  // HWC -> CHW, normalize to [0,1]
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
    const x = (cx - pad.padX) / pad.scale;
    const y = (cy - pad.padY) / pad.scale;
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

/** Check if the model is available (bundled or uploaded) */
export async function isModelAvailable(): Promise<boolean> {
  // 1. Check IndexedDB override
  try {
    if (await isModelStored(MODEL_ID)) return true;
  } catch {
    // Fall through
  }
  // 2. Check bundled static asset (validates ONNX magic + size, not just 200 OK)
  const probe = await probeBundledModel();
  return probe.valid;
}

/** Get the model status message */
export async function getModelStatus(): Promise<{
  available: boolean;
  message: string;
  details: string[];
}> {
  // 1. Check IndexedDB override
  let uploadedAvailable = false;
  try {
    uploadedAvailable = await isModelStored(MODEL_ID);
  } catch {
    // Not available
  }

  if (uploadedAvailable) {
    return {
      available: true,
      message: "AI model loaded (custom)",
      details: [
        "YOLOv8 ONNX model loaded from browser storage",
        "Classes: Longitudinal Crack (D00), Transverse Crack (D10),",
        "         Alligator/Fatigue Crack (D20), Pothole (D40)",
        "Runtime: ONNX Runtime Web (WASM)",
      ],
    };
  }

  // 2. Check bundled static asset (validates ONNX magic + size, not just 200 OK)
  const probe = await probeBundledModel();

  if (probe.valid) {
    return {
      available: true,
      message: "AI model loaded",
      details: [
        "YOLOv8 ONNX model (RDD2022 road-damage, 4 classes)",
        "Classes: Longitudinal Crack (D00), Transverse Crack (D10),",
        "         Alligator/Fatigue Crack (D20), Pothole (D40)",
        "Runtime: ONNX Runtime Web (WASM)",
      ],
    };
  }

  const placeholderDetails =
    probe.reachable && probe.totalBytes > 0 && probe.totalBytes < MIN_MODEL_BYTES
      ? [
          `A file exists at ${BUNDLED_MODEL_URL} but it is only`,
          `${probe.totalBytes} bytes — not a valid ONNX model.`,
          "",
          "This is usually an un-materialized Git LFS pointer.",
          "",
          "Fix: pull the real model bytes into the repository, e.g.",
          "  git lfs pull --include public/models/road-yolov8.onnx",
          "so the full model file (≈44 MB) is served at that URL.",
        ]
      : [
          "The road defect detection model could not be loaded.",
          "",
          `Expected location: ${BUNDLED_MODEL_URL}`,
          "",
          "The model file must be present as a bundled application asset.",
          "Contact the administrator to restore the model file.",
        ];

  return {
    available: false,
    message: "AI model unavailable",
    details: placeholderDetails,
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

/** Get the source the model was loaded from (after first inference) */
export function getLoadedSource(): ModelLoadSource {
  return loadedSource;
}

/**
 * Invalidate the cached model session.
 * Call this after uploading a custom model to force reload.
 */
export function invalidateModelCache(): void {
  sessionPromise = null;
  loadedSource = "none";
}
