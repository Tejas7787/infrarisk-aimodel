#!/bin/bash
# ——————————————————————————————————————————————————
#  Git LFS setup for road-yolov8.onnx
#  Run this from the project root on ANY machine
#  (desktop, laptop, or phone terminal app).
# ——————————————————————————————————————————————————

set -e

echo "1. Ensure Git LFS is installed"
if ! git lfs version >/dev/null 2>&1; then
  echo "   Installing Git LFS…"
  # macOS:   brew install git-lfs
  # Ubuntu:  sudo apt install git-lfs
  # Windows: winget install Git.Git  (LFS ships with Git for Windows 2.36+)
  # iOS:     Working Copy app has Git LFS built in
  # Android: Termux → pkg install git git-lfs
  git lfs install
fi

echo "2. Install LFS hooks in this repo"
git lfs install --local

echo "3. Track the model file (already in .gitattributes)"
git lfs track "public/models/road-yolov8.onnx"

echo "4. Place your model file at public/models/road-yolov8.onnx"
if [ -f public/models/road-yolov8.onnx ]; then
  SIZE=$(du -h public/models/road-yolov8.onnx | cut -f1)
  echo "   ✔ Found: road-yolov8.onnx ($SIZE)"
else
  echo "   ⚠  File not found — copy it to public/models/road-yolov8.onnx"
fi

echo "5. Stage, commit, and push"
git add .gitattributes public/models/road-yolov8.onnx
git commit -m "chore: add road-yolov8.onnx via Git LFS"
git push

echo ""
echo "✔ Done. Verify at: GitHub → your repo → public/models/road-yolov8.onnx"
echo "  The file should show a 'LFS' badge in the file list."
