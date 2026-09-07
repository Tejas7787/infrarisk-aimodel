/**
 * Postbuild script: remove onnxruntime-web WASM files from dist/.
 *
 * Vite copies ort-wasm-simd-threaded.jsep.wasm (~27 MB) into dist/assets/
 * because onnxruntime-web internally references it via `new URL()`.
 *
 * This file is UNUSED at runtime — yolo-inference.ts sets
 * ort.env.wasm.wasmPaths to the jsDelivr CDN, which serves the WASM.
 *
 * Cloudflare Pages rejects individual assets > 25 MiB, so we delete the
 * bundled copy after Vite finishes building.
 */

import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const ASSETS_DIR = "dist/assets";
const MAX_BYTES = 25 * 1024 * 1024; // 25 MiB

let removed = 0;

try {
  const files = readdirSync(ASSETS_DIR);

  for (const file of files) {
    if (!file.endsWith(".wasm")) continue;

    const filePath = join(ASSETS_DIR, file);
    const size = statSync(filePath).size;

    if (size > MAX_BYTES) {
      console.log(
        `Removing oversized WASM (${(size / 1024 / 1024).toFixed(1)} MiB): ${file}`,
      );
      unlinkSync(filePath);
      removed++;
    }
  }
} catch (err) {
  // dist/assets may not exist yet — that's fine
  if (err.code !== "ENOENT") {
    console.error("Postbuild WASM cleanup error:", err.message);
    process.exit(1);
  }
}

if (removed > 0) {
  console.log(`Removed ${removed} oversized WASM file(s) from ${ASSETS_DIR}`);
} else {
  console.log("No oversized WASM files found in dist — nothing to remove");
}
