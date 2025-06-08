import { middlewareStorage } from "./middleware-storage.js";
import { config, StorageConfig } from "./options.js";
import { storageSync } from "./storage-sync.js";
import { IndexedDBService } from "./indexeddb-service.js";

const indexedDB = new IndexedDBService();

export const getAllDataFromLocalForage = async (options: StorageConfig) => {
  config.keys = options.keys;
  config.storage = middlewareStorage;

  await indexedDB.init();
  const keys = await indexedDB.keys();

  const dataWithKeys = await Promise.all(
    keys.map(async (key: string) => {
      const data = await indexedDB.getItem(key);
      return [key, data];
    })
  );

  const dataStorage = dataWithKeys.reduce((previousValue: Record<string, any>, [key, data]: [string, any]) => {
    previousValue[key] = data;
    return previousValue;
  }, {});

  middlewareStorage.dataStorage = dataStorage;
  return dataStorage;
};

export function storageSyncMetaReducer(
  reducer: any
): any {
  return storageSync(reducer);
}
