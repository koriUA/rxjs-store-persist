"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageSyncMetaReducer = exports.getAllDataFromLocalForage = void 0;
const localForage = require("localforage");
const middleware_storage_1 = require("./middleware-storage");
const options_1 = require("./options");
const storage_sync_1 = require("./storage-sync");
const getAllDataFromLocalForage = (options) => {
    options_1.config.keys = options.keys;
    options_1.config.storage = middleware_storage_1.middlewareStorage;
    localForage.config({
        driver: options.driver || localForage.LOCALSTORAGE,
        name: 'NGRX Storage',
        version: 1.0,
        size: 4980736,
        storeName: 'keyvaluepairs',
        description: 'NGRX storage persist'
    });
    return localForage.keys()
        .then(keys => {
        return Promise.all(keys.map((key) => localForage.getItem(key).then(data => [key, data])));
    })
        .then(dataWithKeys => {
        const dataStorage = dataWithKeys.reduce((previousValue, [key, data]) => {
            previousValue[key] = data;
            return previousValue;
        }, {});
        middleware_storage_1.middlewareStorage.dataStorage = dataStorage;
        return dataStorage;
    });
};
exports.getAllDataFromLocalForage = getAllDataFromLocalForage;
function storageSyncMetaReducer(reducer) {
    return (0, storage_sync_1.storageSync)(reducer);
}
exports.storageSyncMetaReducer = storageSyncMetaReducer;
exports.default = localForage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTJDO0FBQzNDLDZEQUF1RDtBQUN2RCx1Q0FBZ0Q7QUFDaEQsaURBQTJDO0FBRXBDLE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxPQUFzQixFQUFFLEVBQUU7SUFDbEUsZ0JBQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMzQixnQkFBTSxDQUFDLE9BQU8sR0FBRyxzQ0FBaUIsQ0FBQztJQUNuQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ2pCLE1BQU0sRUFBUSxPQUFPLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxZQUFZO1FBQ3hELElBQUksRUFBVSxjQUFjO1FBQzVCLE9BQU8sRUFBTyxHQUFHO1FBQ2pCLElBQUksRUFBVSxPQUFPO1FBQ3JCLFNBQVMsRUFBSyxlQUFlO1FBQzdCLFdBQVcsRUFBRyxzQkFBc0I7S0FDckMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFO1NBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNYLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDaEIsSUFBSSxDQUFDLEdBQUcsQ0FDTixDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUM1RCxDQUNGLENBQUM7SUFDSixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDbkIsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWtCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUMxRSxhQUFhLENBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNQLHNDQUFpQixDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDNUMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUE1QlcsUUFBQSx5QkFBeUIsNkJBNEJwQztBQUVGLFNBQWdCLHNCQUFzQixDQUNsQyxPQUFZO0lBRWQsT0FBTyxJQUFBLDBCQUFXLEVBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUpELHdEQUlDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xyXG5pbXBvcnQge21pZGRsZXdhcmVTdG9yYWdlfSBmcm9tIFwiLi9taWRkbGV3YXJlLXN0b3JhZ2VcIjtcclxuaW1wb3J0IHtjb25maWcsIFN0b3JhZ2VDb25maWd9IGZyb20gXCIuL29wdGlvbnNcIjtcclxuaW1wb3J0IHtzdG9yYWdlU3luY30gZnJvbSBcIi4vc3RvcmFnZS1zeW5jXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsRGF0YUZyb21Mb2NhbEZvcmFnZSA9IChvcHRpb25zOiBTdG9yYWdlQ29uZmlnKSA9PiB7XHJcbiAgY29uZmlnLmtleXMgPSBvcHRpb25zLmtleXM7XHJcbiAgY29uZmlnLnN0b3JhZ2UgPSBtaWRkbGV3YXJlU3RvcmFnZTtcclxuICBsb2NhbEZvcmFnZS5jb25maWcoe1xyXG4gICAgZHJpdmVyICAgICAgOiBvcHRpb25zLmRyaXZlciB8fCBsb2NhbEZvcmFnZS5MT0NBTFNUT1JBR0UsXHJcbiAgICBuYW1lICAgICAgICA6ICdOR1JYIFN0b3JhZ2UnLFxyXG4gICAgdmVyc2lvbiAgICAgOiAxLjAsXHJcbiAgICBzaXplICAgICAgICA6IDQ5ODA3MzYsXHJcbiAgICBzdG9yZU5hbWUgICA6ICdrZXl2YWx1ZXBhaXJzJyxcclxuICAgIGRlc2NyaXB0aW9uIDogJ05HUlggc3RvcmFnZSBwZXJzaXN0J1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbG9jYWxGb3JhZ2Uua2V5cygpXHJcbiAgICAudGhlbihrZXlzID0+IHtcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICAgIGtleXMubWFwKFxyXG4gICAgICAgICAgKGtleSkgPT4gbG9jYWxGb3JhZ2UuZ2V0SXRlbShrZXkpLnRoZW4oZGF0YSA9PiBba2V5LCBkYXRhXSlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZGF0YVdpdGhLZXlzID0+IHtcclxuICAgICAgY29uc3QgZGF0YVN0b3JhZ2UgPSBkYXRhV2l0aEtleXMucmVkdWNlKChwcmV2aW91c1ZhbHVlOiBhbnksIFtrZXksIGRhdGFdKSA9PiB7XHJcbiAgICAgICAgcHJldmlvdXNWYWx1ZVs8c3RyaW5nPmtleV0gPSBkYXRhO1xyXG4gICAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIG1pZGRsZXdhcmVTdG9yYWdlLmRhdGFTdG9yYWdlID0gZGF0YVN0b3JhZ2U7XHJcbiAgICAgIHJldHVybiBkYXRhU3RvcmFnZTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VTeW5jTWV0YVJlZHVjZXIoXHJcbiAgICByZWR1Y2VyOiBhbnlcclxuKTogYW55IHtcclxuICByZXR1cm4gc3RvcmFnZVN5bmMocmVkdWNlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvY2FsRm9yYWdlO1xyXG4iXX0=