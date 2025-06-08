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
exports.IndexedDBService = void 0;
class IndexedDBService {
    constructor() {
        this.db = null;
        this.DB_NAME = 'NGRX Storage';
        this.STORE_NAME = 'keyvaluepairs';
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                return;
            }
            return new Promise((resolve, reject) => {
                const request = indexedDB.open(this.DB_NAME, 3);
                request.onerror = () => reject(request.error);
                request.onsuccess = () => {
                    this.db = request.result;
                    resolve();
                };
                request.onupgradeneeded = (event) => {
                    const db = event.target.result;
                    if (!db.objectStoreNames.contains(this.STORE_NAME)) {
                        db.createObjectStore(this.STORE_NAME);
                    }
                };
            });
        });
    }
    getItem(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.init();
            return new Promise((resolve, reject) => {
                if (!this.db) {
                    reject(new Error('Database not initialized'));
                    return;
                }
                const transaction = this.db.transaction(this.STORE_NAME, 'readonly');
                const store = transaction.objectStore(this.STORE_NAME);
                const request = store.get(key);
                request.onerror = () => reject(request.error);
                request.onsuccess = () => {
                    try {
                        const value = request.result;
                        resolve(value ? JSON.parse(value) : null);
                    }
                    catch (_a) {
                        resolve(request.result);
                    }
                };
            });
        });
    }
    setItem(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.init();
            return new Promise((resolve, reject) => {
                if (!this.db) {
                    reject(new Error('Database not initialized'));
                    return;
                }
                const transaction = this.db.transaction(this.STORE_NAME, 'readwrite');
                const store = transaction.objectStore(this.STORE_NAME);
                const serialized = typeof value === 'string' ? value : JSON.stringify(value);
                const request = store.put(serialized, key);
                request.onerror = () => reject(request.error);
                request.onsuccess = () => resolve();
            });
        });
    }
    removeItem(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.init();
            return new Promise((resolve, reject) => {
                if (!this.db) {
                    reject(new Error('Database not initialized'));
                    return;
                }
                const transaction = this.db.transaction(this.STORE_NAME, 'readwrite');
                const store = transaction.objectStore(this.STORE_NAME);
                const request = store.delete(key);
                request.onerror = () => reject(request.error);
                request.onsuccess = () => resolve();
            });
        });
    }
    keys() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.init();
            return new Promise((resolve, reject) => {
                if (!this.db) {
                    reject(new Error('Database not initialized'));
                    return;
                }
                const transaction = this.db.transaction(this.STORE_NAME, 'readonly');
                const store = transaction.objectStore(this.STORE_NAME);
                const request = store.getAllKeys();
                request.onerror = () => reject(request.error);
                request.onsuccess = () => resolve(Array.from(request.result));
            });
        });
    }
}
exports.IndexedDBService = IndexedDBService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZGRiLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXhlZGRiLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxnQkFBZ0I7SUFBN0I7UUFDVSxPQUFFLEdBQXVCLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQUcsY0FBYyxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxlQUFlLENBQUM7SUFvR2hELENBQUM7SUFsR08sSUFBSTs7WUFDUixJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTzthQUNWO1lBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVoRCxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO29CQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsQ0FBQztnQkFFRixPQUFPLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2xDLE1BQU0sRUFBRSxHQUFJLEtBQUssQ0FBQyxNQUEyQixDQUFDLE1BQU0sQ0FBQztvQkFDckQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUNsRCxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUN2QztnQkFDSCxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxHQUFXOztZQUN2QixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDWixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxPQUFPO2lCQUNSO2dCQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUvQixPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO29CQUN2QixJQUFJO3dCQUNGLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMzQztvQkFBQyxXQUFNO3dCQUNOLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3pCO2dCQUNILENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLEdBQVcsRUFBRSxLQUFVOztZQUNuQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDWixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxPQUFPO2lCQUNSO2dCQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ3RFLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLFVBQVUsR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0UsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRTNDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxHQUFXOztZQUMxQixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDWixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxPQUFPO2lCQUNSO2dCQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ3RFLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVsQyxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNSLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUNaLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7b0JBQzlDLE9BQU87aUJBQ1I7Z0JBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDckUsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFFbkMsT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFrQixDQUFDLENBQUMsQ0FBQztZQUM1RSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBdkdELDRDQXVHQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJbmRleGVkREJTZXJ2aWNlIHtcclxuICBwcml2YXRlIGRiOiBJREJEYXRhYmFzZSB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgREJfTkFNRSA9ICdOR1JYIFN0b3JhZ2UnO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgU1RPUkVfTkFNRSA9ICdrZXl2YWx1ZXBhaXJzJztcclxuXHJcbiAgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLmRiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3Blbih0aGlzLkRCX05BTUUsIDMpO1xyXG5cclxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRiID0gcmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYiA9IChldmVudC50YXJnZXQgYXMgSURCT3BlbkRCUmVxdWVzdCkucmVzdWx0O1xyXG4gICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyh0aGlzLlNUT1JFX05BTUUpKSB7XHJcbiAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSh0aGlzLlNUT1JFX05BTUUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5kYikge1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0RhdGFiYXNlIG5vdCBpbml0aWFsaXplZCcpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5kYi50cmFuc2FjdGlvbih0aGlzLlNUT1JFX05BTUUsICdyZWFkb25seScpO1xyXG4gICAgICBjb25zdCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMuU1RPUkVfTkFNRSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5nZXQoa2V5KTtcclxuXHJcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgICByZXNvbHZlKHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBudWxsKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgYXdhaXQgdGhpcy5pbml0KCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuZGIpIHtcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdEYXRhYmFzZSBub3QgaW5pdGlhbGl6ZWQnKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGhpcy5TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XHJcbiAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5TVE9SRV9OQU1FKTtcclxuICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLnB1dChzZXJpYWxpemVkLCBrZXkpO1xyXG5cclxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgYXdhaXQgdGhpcy5pbml0KCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuZGIpIHtcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdEYXRhYmFzZSBub3QgaW5pdGlhbGl6ZWQnKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGhpcy5TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XHJcbiAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5TVE9SRV9OQU1FKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLmRlbGV0ZShrZXkpO1xyXG5cclxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMga2V5cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5kYikge1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0RhdGFiYXNlIG5vdCBpbml0aWFsaXplZCcpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5kYi50cmFuc2FjdGlvbih0aGlzLlNUT1JFX05BTUUsICdyZWFkb25seScpO1xyXG4gICAgICBjb25zdCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMuU1RPUkVfTkFNRSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5nZXRBbGxLZXlzKCk7XHJcblxyXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShBcnJheS5mcm9tKHJlcXVlc3QucmVzdWx0IGFzIHN0cmluZ1tdKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0gIl19