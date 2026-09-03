/**
 * ONNX Model Storage — persists user-uploaded models in IndexedDB
 *
 * When a user uploads road-yolov8.onnx from their device, the file bytes
 * are stored in IndexedDB (browser-local, persistent across sessions).
 * ONNX Runtime Web loads from this cache on subsequent visits.
 *
 * Also uploads to Convex storage for server-side metadata tracking.
 */

const DB_NAME = "infrisk-models";
const DB_VERSION = 1;
const STORE_NAME = "onnx-models";

interface StoredModel {
  id: string; // e.g. "road-yolov8"
  fileName: string;
  fileSize: number;
  uploadedAt: number;
  arrayBuffer: ArrayBuffer;
}

// ---------------------------------------------------------------------------
// IndexedDB helpers
// ---------------------------------------------------------------------------

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Save an ONNX model ArrayBuffer to IndexedDB.
 * Returns the model ID used for retrieval.
 */
export async function saveModel(
  modelId: string,
  fileName: string,
  arrayBuffer: ArrayBuffer
): Promise<StoredModel> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const record: StoredModel = {
      id: modelId,
      fileName,
      fileSize: arrayBuffer.byteLength,
      uploadedAt: Date.now(),
      arrayBuffer,
    };
    const request = store.put(record);
    request.onsuccess = () => {
      db.close();
      resolve(record);
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

/**
 * Retrieve a stored ONNX model from IndexedDB.
 * Returns null if no model with the given ID exists.
 */
export async function loadModel(
  modelId: string
): Promise<StoredModel | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(modelId);
    request.onsuccess = () => {
      db.close();
      resolve(request.result ?? null);
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

/**
 * Check if a model is stored in IndexedDB (without loading the full ArrayBuffer).
 */
export async function isModelStored(modelId: string): Promise<boolean> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.count(modelId);
    request.onsuccess = () => {
      db.close();
      resolve(request.result > 0);
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

/**
 * Get model metadata without loading the ArrayBuffer.
 */
export async function getModelInfo(
  modelId: string
): Promise<Omit<StoredModel, "arrayBuffer"> | null> {
  const stored = await loadModel(modelId);
  if (!stored) return null;
  const { arrayBuffer: _, ...info } = stored;
  return info;
}

/**
 * Delete a stored model from IndexedDB.
 */
export async function deleteModel(modelId: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const request = store.delete(modelId);
    request.onsuccess = () => {
      db.close();
      resolve();
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

// ---------------------------------------------------------------------------
// Convenience: read a File object into ArrayBuffer and store
// ---------------------------------------------------------------------------

export async function uploadModelFile(
  modelId: string,
  file: File
): Promise<StoredModel> {
  const arrayBuffer = await file.arrayBuffer();
  return saveModel(modelId, file.name, arrayBuffer);
}

// ---------------------------------------------------------------------------
// Well-known model IDs
// ---------------------------------------------------------------------------

export const ROAD_MODEL_ID = "road-yolov8";
