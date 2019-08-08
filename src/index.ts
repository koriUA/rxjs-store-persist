import * as localForage from 'localforage';
import {middlewareStorage} from "./middleware-storage";
import {config, StorageConfig} from "./options";



export const getAllDataFromLocalForage = (options: StorageConfig) => {
  config.keys = options.keys;
  config.storage = middlewareStorage;
  localForage.config({
    driver      : options.driver || localForage.LOCALSTORAGE,
    name        : 'NGRX Storage',
    version     : 1.0,
    size        : 4980736,
    storeName   : 'keyvaluepairs',
    description : 'NGRX storage persist'
  });

  return localForage.keys()
    .then(keys => {
      return Promise.all(
        keys.map(
          (key) => localForage.getItem(key).then(data => [key, data])
        )
      );
    })
    .then(dataWithKeys => {
      const dataStorage = dataWithKeys.reduce((previousValue: any, [key, data]) => {
        previousValue[<string>key] = data;
        return previousValue;
      }, {});
      middlewareStorage.dataStorage = dataStorage;
    });
};

export default localForage;
