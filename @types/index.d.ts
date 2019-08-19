import * as localForage from 'localforage';
import { StorageConfig } from "./options";
export declare const getAllDataFromLocalForage: (options: StorageConfig) => Promise<any>;
export declare function storageSyncMetaReducer(reducer: any): any;
export default localForage;
