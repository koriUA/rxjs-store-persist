declare class MiddlewareStorage implements Storage {
    length: any;
    dataStorage: any;
    getItem(key: string): string | null;
    key(): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
    clear(): void;
}
export declare const middlewareStorage: MiddlewareStorage;
export {};
