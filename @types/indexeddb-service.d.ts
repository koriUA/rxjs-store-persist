export declare class IndexedDBService {
    private db;
    private readonly DB_NAME;
    private readonly STORE_NAME;
    init(): Promise<void>;
    getItem(key: string): Promise<any>;
    setItem(key: string, value: any): Promise<void>;
    removeItem(key: string): Promise<void>;
    keys(): Promise<string[]>;
}
