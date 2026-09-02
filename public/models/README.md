# InfraRisk AI — Model Setup

This directory holds ONNX models for inference. The application runs inference
entirely in the browser using ONNX Runtime Web (WASM backend).

## Road Defect Detection (RDD2022)

**Required file:** `road-yolov8.onnx`

### Dataset
- **RDD2022**: https://github.com/ai4civilengineering/RDD2022
- **4 classes:**
  - `D00` — Longitudinal crack
  - `D10` — Transverse crack
  - `D20` — Alligator crack
  - `D40` — Pothole

### Training
```bash
# Install ultralytics
pip install ultralytics

# Train YOLOv8n on RDD2022
yolo train model=yolov8n.pt data=rdd2022.yaml epochs=100 imgsz=640 batch=16

# The trained weights will be in runs/detect/train/weights/best.pt
```

### Export to ONNX
```bash
yolo export model=runs/detect/train/weights/best.pt format=onnx opset=12 imgsz=640
```

### Place the model
Copy the exported `best.onnx` to this directory as `road-yolov8.onnx`:
```bash
cp runs/detect/train/weights/best.onnx public/models/road-yolov8.onnx
```

The model file should be ~6MB for YOLOv8n or ~22MB for YOLOv8s.

---

## Bridge Defect Detection (GYU-DET)

**Not yet connected.** To add:

1. Train YOLOv8 on GYU-DET dataset
2. Export to ONNX
3. Place as `bridge-yolov8.onnx`
4. Add a `analyzeBridge()` adapter in `src/lib/ai-service.ts`

---

## Model Requirements

- **Format**: YOLOv8 ONNX export (opset 12+)
- **Input**: float32 NCHW tensor, [1, 3, 640, 640], normalized to [0,1]
- **Output**: float32 tensor, [1, 4+num_classes, num_detections]
- **Backend**: ONNX Runtime Web with WASM execution provider
