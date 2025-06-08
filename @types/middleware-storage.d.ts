declare class MiddlewareStorage implements Storage {
    length: any;
    dataStorage: any;
    private storage;
    constructor();
    getItem(key: string): string | null;
    key(): string | null;
    removeItem(key: string): Promise<void>;
    setItem(key: string, value: string): Promise<void>;
    clear(): void;
}
export declare const middlewareStorage: MiddlewareStorage;
export {};
