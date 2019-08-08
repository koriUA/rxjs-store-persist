# ngrx-store-persist
Simple syncing between ngrx store and localStorage, IndexedDB or WebSQL.

## Dependencies
`ngrx-store-persist` depends on [@ngrx/store](https://github.com/ngrx/store) and [Angular 2+](https://github.com/angular/angular).

## Usage
```bash
npm install ngrx-store-persist --save
```

```ts
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(
        reducers,
        {metaReducers}
    )
  ]
})
export class AppModule {}
```
