"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageSyncMetaReducer = exports.getAllDataFromLocalForage = void 0;
const middleware_storage_js_1 = require("./middleware-storage.js");
const options_js_1 = require("./options.js");
const storage_sync_js_1 = require("./storage-sync.js");
const indexeddb_service_js_1 = require("./indexeddb-service.js");
const indexedDB = new indexeddb_service_js_1.IndexedDBService();
const getAllDataFromLocalForage = (options) => __awaiter(void 0, void 0, void 0, function* () {
    options_js_1.config.keys = options.keys;
    options_js_1.config.storage = middleware_storage_js_1.middlewareStorage;
    yield indexedDB.init();
    const keys = yield indexedDB.keys();
    const dataWithKeys = yield Promise.all(keys.map((key) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield indexedDB.getItem(key);
        return [key, data];
    })));
    const dataStorage = dataWithKeys.reduce((previousValue, [key, data]) => {
        previousValue[key] = data;
        return previousValue;
    }, {});
    middleware_storage_js_1.middlewareStorage.dataStorage = dataStorage;
    return dataStorage;
});
exports.getAllDataFromLocalForage = getAllDataFromLocalForage;
function storageSyncMetaReducer(reducer) {
    return (0, storage_sync_js_1.storageSync)(reducer);
}
exports.storageSyncMetaReducer = storageSyncMetaReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQTREO0FBQzVELDZDQUFxRDtBQUNyRCx1REFBZ0Q7QUFDaEQsaUVBQTBEO0FBRTFELE1BQU0sU0FBUyxHQUFHLElBQUksdUNBQWdCLEVBQUUsQ0FBQztBQUVsQyxNQUFNLHlCQUF5QixHQUFHLENBQU8sT0FBc0IsRUFBRSxFQUFFO0lBQ3hFLG1CQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDM0IsbUJBQU0sQ0FBQyxPQUFPLEdBQUcseUNBQWlCLENBQUM7SUFFbkMsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFcEMsTUFBTSxZQUFZLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQU8sR0FBVyxFQUFFLEVBQUU7UUFDN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFBLENBQUMsQ0FDSCxDQUFDO0lBRUYsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWtDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFnQixFQUFFLEVBQUU7UUFDekcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMxQixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCx5Q0FBaUIsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQzVDLE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUMsQ0FBQSxDQUFDO0FBckJXLFFBQUEseUJBQXlCLDZCQXFCcEM7QUFFRixTQUFnQixzQkFBc0IsQ0FDcEMsT0FBWTtJQUVaLE9BQU8sSUFBQSw2QkFBVyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFKRCx3REFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1pZGRsZXdhcmVTdG9yYWdlIH0gZnJvbSBcIi4vbWlkZGxld2FyZS1zdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBjb25maWcsIFN0b3JhZ2VDb25maWcgfSBmcm9tIFwiLi9vcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlU3luYyB9IGZyb20gXCIuL3N0b3JhZ2Utc3luYy5qc1wiO1xuaW1wb3J0IHsgSW5kZXhlZERCU2VydmljZSB9IGZyb20gXCIuL2luZGV4ZWRkYi1zZXJ2aWNlLmpzXCI7XG5cbmNvbnN0IGluZGV4ZWREQiA9IG5ldyBJbmRleGVkREJTZXJ2aWNlKCk7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxEYXRhRnJvbUxvY2FsRm9yYWdlID0gYXN5bmMgKG9wdGlvbnM6IFN0b3JhZ2VDb25maWcpID0+IHtcbiAgY29uZmlnLmtleXMgPSBvcHRpb25zLmtleXM7XG4gIGNvbmZpZy5zdG9yYWdlID0gbWlkZGxld2FyZVN0b3JhZ2U7XG5cbiAgYXdhaXQgaW5kZXhlZERCLmluaXQoKTtcbiAgY29uc3Qga2V5cyA9IGF3YWl0IGluZGV4ZWREQi5rZXlzKCk7XG5cbiAgY29uc3QgZGF0YVdpdGhLZXlzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAga2V5cy5tYXAoYXN5bmMgKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgaW5kZXhlZERCLmdldEl0ZW0oa2V5KTtcbiAgICAgIHJldHVybiBba2V5LCBkYXRhXTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0IGRhdGFTdG9yYWdlID0gZGF0YVdpdGhLZXlzLnJlZHVjZSgocHJldmlvdXNWYWx1ZTogUmVjb3JkPHN0cmluZywgYW55PiwgW2tleSwgZGF0YV06IFtzdHJpbmcsIGFueV0pID0+IHtcbiAgICBwcmV2aW91c1ZhbHVlW2tleV0gPSBkYXRhO1xuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xuICB9LCB7fSk7XG5cbiAgbWlkZGxld2FyZVN0b3JhZ2UuZGF0YVN0b3JhZ2UgPSBkYXRhU3RvcmFnZTtcbiAgcmV0dXJuIGRhdGFTdG9yYWdlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VTeW5jTWV0YVJlZHVjZXIoXG4gIHJlZHVjZXI6IGFueVxuKTogYW55IHtcbiAgcmV0dXJuIHN0b3JhZ2VTeW5jKHJlZHVjZXIpO1xufVxuIl19