import { default as localforage } from './index';

class MiddlewareStorage implements Storage {
  length: any;
  public dataStorage: any = {};

  getItem(key: string): string | null {
    return this.dataStorage[key];
  }

  key(): string | null {
    return null;
  }

  removeItem(key: string): void {
    localforage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    localforage.setItem(key, value);
  }

  clear(): void {}
}

export const middlewareStorage = new MiddlewareStorage();
