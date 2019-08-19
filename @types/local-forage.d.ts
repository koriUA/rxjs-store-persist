import * as localForage from 'localforage';
import { StorageConfig } from "./options";
export declare const getAllDataFromLocalForage: (options: StorageConfig) => Promise<void>;
export default localForage;
