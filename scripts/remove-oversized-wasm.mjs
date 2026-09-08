/**
 * Postbuild script: remove oversized files from dist/.
 *
 * - ort-wasm-simd-threaded.jsep.wasm (~27 MB) is unused (CDN serves it)
 * - road-yolov8.onnx (~44 MB) is unused (fetched from raw GitHub at runtime)
 *
 * Cloudflare Pages rejects individual assets > 25 MiB, so we delete the
 * bundled copies after Vite finishes building.
 */

import { readdirSync, statSync, unlinkSync, rmSync } from "node:fs";
import { join } from "node:path";

const MAX_BYTES = 25 * 1024 * 1024; // 25 MiB
let removed = 0;

/** Scan a directory for oversized files and remove them. */
function removeOversized(dir, pattern) {
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        removeOversized(join(dir, entry.name), pattern);
        continue;
      }
      if (!pattern.test(entry.name)) continue;
      const filePath = join(dir, entry.name);
      const size = statSync(filePath).size;
      if (size > MAX_BYTES) {
        console.log(
          `Removing oversized file (${(size / 1024 / 1024).toFixed(1)} MiB): ${filePath}`,
        );
        unlinkSync(filePath);
        removed++;
      }
    }
  } catch (err) {
    if (err.code !== "ENOENT") {
      console.error(`Postbuild cleanup error in ${dir}:`, err.message);
    }
  }
}

// Remove oversized .wasm files from dist/assets/
removeOversized("dist/assets", /\.wasm$/);

// Remove oversized .onnx files from dist/ (e.g. models/road-yolov8.onnx)
removeOversized("dist", /\.onnx$/);

if (removed > 0) {
  console.log(`Removed ${removed} oversized file(s) from dist/`);
} else {
  console.log("No oversized files found in dist — nothing to remove");
}
