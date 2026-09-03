/**
 * Hugging Face Transformers.js Inference Adapter
 *
 * Runs a real DETR object-detection model (facebook/detr-resnet-50) directly
 * in the browser via WebAssembly. The model is loaded from Hugging Face Hub
 * on first inference call and cached for subsequent runs.
 *
 * The DETR model is pre-trained on COCO (80 object classes). For infrastructure
 * inspection, we detect general objects present in the image and map them to
 * infrastructure-relevant findings. This is real AI inference — not simulated.
 *
 * Limitations:
 * - COCO-pretrained, not fine-tuned on infrastructure defect datasets
 * - Detects general objects (car, truck, person, etc.), not specific defects
 * - For production: fine-tune on RDD2022 (roads) or GYU-DET (bridges)
 */

// Use dynamic import so the module loads only when first needed
// and doesn't block the initial page load

let detectorPromise: Promise<any> | null = null;

// ---------------------------------------------------------------------------
// COCO class labels (80 classes) — subset relevant to infrastructure analysis
// ---------------------------------------------------------------------------

/** Classes in COCO that have infrastructure relevance */
const INFRA_RELEVANT_COCO: Record<string, { defectType: string; category: string }> = {
  // Vehicles — indicate road usage / traffic load
  car: { defectType: "traffic_evidence", category: "usage" },
  truck: { defectType: "heavy_traffic_evidence", category: "usage" },
  bus: { defectType: "heavy_traffic_evidence", category: "usage" },
  motorcycle: { defectType: "traffic_evidence", category: "usage" },

  // People — indicate pedestrian activity / safety concern
  person: { defectType: "pedestrian_presence", category: "safety" },

  // Infrastructure objects
  traffic_light: { defectType: "infrastructure_present", category: "infrastructure" },
  stop_sign: { defectType: "infrastructure_present", category: "infrastructure" },
  fire_hydrant: { defectType: "infrastructure_present", category: "infrastructure" },
  bench: { defectType: "street_furniture", category: "infrastructure" },

  // Construction / barriers — may indicate ongoing issues
  "traffic cone": { defectType: "construction_zone", category: "hazard" },
  "parking meter": { defectType: "infrastructure_present", category: "infrastructure" },

  // Potential damage indicators
  backpack: { defectType: "debris_evidence", category: "surface" },
  handbag: { defectType: "debris_evidence", category: "surface" },
  suitcase: { defectType: "debris_evidence", category: "surface" },
};

// Generic fallback for non-infrastructure COCO classes
function mapCOCOToInfrastructure(label: string): { defectType: string; category: string } {
  return INFRA_RELEVANT_COCO[label] ?? {
    defectType: `observed_${label.replace(/\s+/g, "_")}`,
    category: "general",
  };
}

// ---------------------------------------------------------------------------
// Transformer.js pipeline loading
// ---------------------------------------------------------------------------

async function getDetector() {
  if (!detectorPromise) {
    detectorPromise = (async () => {
      // Dynamic import — @huggingface/transformers is large, load lazily
      const { pipeline } = await import("@huggingface/transformers");

      // Load DETR ResNet-50 from Hugging Face Hub (ONNX, ~170MB first load, cached after)
      const detector = await pipeline(
        "object-detection",
        "Xenova/detr-resnet-50",
        {
          // Prefer WASM backend for broad browser compatibility
          device: "wasm",
        }
      );

      return detector;
    })();

    // Reset on failure so next attempt retries
    detectorPromise.catch(() => {
      detectorPromise = null;
    });
  }
  return detectorPromise;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export interface HFDetection {
  label: string;
  score: number;
  box: { xmin: number; ymin: number; xmax: number; ymax: number };
}

export interface InfraDetection {
  label: string;
  confidence: number;
  defectType: string;
  category: string;
  bboxX: number;
  bboxY: number;
  bboxWidth: number;
  bboxHeight: number;
}

/**
 * Check if the HF model can be loaded (network available + model exists).
 * Returns a status message for the UI.
 */
export async function getHFModelStatus(): Promise<{
  available: boolean;
  message: string;
  details: string[];
}> {
  try {
    // Try loading the detector — if it succeeds, the model is available
    await getDetector();
    return {
      available: true,
      message: "DETR-ResNet-50 model loaded from Hugging Face",
      details: [
        "Model: facebook/detr-resnet-50 (COCO, 80 classes)",
        "Runtime: ONNX Runtime Web (WASM backend)",
        "Loaded from: Hugging Face Hub",
        "Pipeline: Real computer-vision inference in the browser",
        "",
        "Note: This model detects general objects (CO.",
        "For infrastructure-specific defect detection, fine-tune",
        "on RDD2022 (roads) or GYU-DET (bridges).",
      ],
    };
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return {
      available: false,
      message: "Hugging Face model could not be loaded",
      details: [
        `Error: ${msg}`,
        "",
        "The DETR model requires network access to load from Hugging Face Hub.",
        "Check your internet connection and try again.",
        "",
        "For production deployment with offline inference:",
        "1. Train a YOLOv8 model on RDD2022 (roads) or GYU-DET (bridges)",
        "2. Export to ONNX: yolo export model=best.pt format=onnx opset=12",
        "3. Place the .onnx file at: public/models/road-yolov8.onnx",
      ],
    };
  }
}

/**
 * Run real object-detection inference on an image.
 * Returns infrastructure-relevant detections with bounding boxes and confidence.
 */
export async function runHFInference(
  imageSource: HTMLImageElement
): Promise<{
  detections: InfraDetection[];
  rawCount: number;
  modelInfo: string;
}> {
  const detector = await getDetector();

  // Run the DETR model — returns [{ score, label, box: { xmin, ymin, xmax, ymax } }]
  const rawResults: HFDetection[] = await detector(imageSource, {
    threshold: 0.3,  // confidence threshold
    percentage: true, // box coords as percentages of image size
  });

  const origW = imageSource.naturalWidth;
  const origH = imageSource.naturalHeight;

  // Convert percentage boxes to pixel coordinates and map to infrastructure categories
  const detections: InfraDetection[] = rawResults
    .filter((r) => r.score >= 0.3)  // double-filter low confidence
    .map((r) => {
      const mapping = mapCOCOToInfrastructure(r.label);
      const xmin = (r.box.xmin / 100) * origW;
      const ymin = (r.box.ymin / 100) * origH;
      const xmax = (r.box.xmax / 100) * origW;
      const ymax = (r.box.ymax / 100) * origH;

      return {
        label: r.label,
        confidence: r.score,
        defectType: mapping.defectType,
        category: mapping.category,
        bboxX: Math.round(xmin),
        bboxY: Math.round(ymin),
        bboxWidth: Math.round(xmax - xmin),
        bboxHeight: Math.round(ymax - ymin),
      };
    });

  const modelInfo = [
    `Model: DETR-ResNet-50 (facebook/detr-resnet-50)`,
    `Runtime: ONNX Runtime Web (WASM)`,
    `Input: ${origW}×${origH}px`,
    `Raw COCO detections: ${rawResults.length}`,
    `Filtered (≥0.3): ${detections.length}`,
    `Classes: ${[...new Set(detections.map((d) => d.label))].join(", ") || "none"}`,
  ].join("\n");

  return {
    detections,
    rawCount: rawResults.length,
    modelInfo,
  };
}
