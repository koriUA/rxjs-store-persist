export interface StorageConfig {
  keys: any[];
}

class Config implements StorageConfig {
  keys: string[];
  storage: any;
}

export const config = new Config();
