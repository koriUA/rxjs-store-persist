// import {ActionReducer} from "@ngrx/store";
import {storageSync} from "./storage-sync";


export function storageSyncMetaReducer(
  reducer: any
): any {
  return storageSync()(reducer);
}
