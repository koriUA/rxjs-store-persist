import { IndexedDBService } from './indexeddb-service.js';

class MiddlewareStorage implements Storage {
  length: any;
  public dataStorage: any = {};
  private storage: IndexedDBService;

  constructor() {
    this.storage = new IndexedDBService();
  }

  getItem(key: string): string | null {
    return this.dataStorage[key];
  }

  key(): string | null {
    return null;
  }

  async removeItem(key: string): Promise<void> {
    await this.storage.removeItem(key);
  }

  async setItem(key: string, value: string): Promise<void> {
    await this.storage.setItem(key, value);
  }

  clear(): void {}
}

export const middlewareStorage = new MiddlewareStorage();
