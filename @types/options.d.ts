export interface StorageConfig {
    keys: any[];
    storage: any;
    driver: any;
}
declare class Config implements StorageConfig {
    keys: string[];
    storage: any;
    driver: any;
}
export declare const config: Config;
export {};
