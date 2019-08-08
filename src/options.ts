export interface StorageConfig {
  keys: any[];
  storage: any;
}

class Config implements StorageConfig {
  keys: string[];
  storage: any;
}

export const config = new Config();
