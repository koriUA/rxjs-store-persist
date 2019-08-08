export interface StorageConfig {
  keys: any[];
  storage: any;
  driver: any;
}

class Config implements StorageConfig {
  keys: string[];
  storage: any;
  driver: any;
}

export const config = new Config();
