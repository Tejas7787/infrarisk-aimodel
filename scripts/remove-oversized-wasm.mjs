import { readdir, unlink, stat } from "node:fs/promises";
import path from "node:path";

const dir = "dist/assets";
const maxSize = 25 * 1024 * 1024;

for (const file of await readdir(dir)) {
  if (!file.endsWith(".wasm")) continue;

  const filePath = path.join(dir, file);
  const info = await stat(filePath);

  if (info.size > maxSize) {
    await unlink(filePath);
    console.log(`Removed oversized WASM: ${file}`);
  }
}
