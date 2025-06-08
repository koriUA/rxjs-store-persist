import { IDBPDatabase } from 'idb';
import { StorageConfig } from "./options.js";
declare let db: IDBPDatabase;
export declare const getAllDataFromLocalForage: (options: StorageConfig) => Promise<any[]>;
export declare function storageSyncMetaReducer(reducer: any): any;
export default db;
