export interface StorageConfig {
    keys: any[];
}
declare class Config implements StorageConfig {
    keys: string[];
    storage: any;
}
export declare const config: Config;
export {};
