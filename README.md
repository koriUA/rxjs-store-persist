# ngrx-store-persist
Simple syncing between ngrx store and localStorage, IndexedDB or WebSQL.

## Dependencies
`ngrx-store-persist` depends on [@ngrx/store](https://github.com/ngrx/store) and [Angular 2+](https://github.com/angular/angular).

## Usage
```bash
npm install ngrx-store-persist --save
```

```ts
// main.ts
import { NgModule } from '@angular/core';
import {
  getAllDataFromLocalForage,
  default as localForage,
} from 'ngrx-store-persist';

getAllDataFromLocalForage({
  driver: localForage.INDEXEDDB,
  keys: [
    'user',
    ''
  ],
}).then(data => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
});
```

Also need to add `storageSyncMetaReducer` to `metaReducers`:
```ts
// app.module.ts
import { storageSyncMetaReducer } from 'ngrx-store-persist';

StoreModule.forRoot(rootReducer, { metaReducers: [storageSyncMetaReducer] }),
```

##Config
* `keys` (required) State keys to sync with storage.
* `driver` (optional) by default equals localForage.LOCALSTORAGE. Also can be localForage.WEBSQL, localForage.INDEXEDDB.