export interface StorageConfig {
    keys: any[];
    driver: any;
}
declare class Config implements StorageConfig {
    keys: string[];
    storage: any;
    driver: any;
}
export declare const config: Config;
export {};
