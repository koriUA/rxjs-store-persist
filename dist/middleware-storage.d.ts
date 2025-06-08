import { IDBPDatabase } from 'idb';
declare class MiddlewareStorage implements Storage {
    private db?;
    length: any;
    dataStorage: any;
    constructor(db?: IDBPDatabase<unknown> | undefined);
    getItem(key: string): string | null;
    key(): string | null;
    removeItem(key: string): Promise<void>;
    setItem(key: string, value: string): Promise<void>;
    clear(): void;
}
export declare const middlewareStorage: MiddlewareStorage;
export {};
