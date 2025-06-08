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
exports.middlewareStorage = void 0;
const indexeddb_service_js_1 = require("./indexeddb-service.js");
class MiddlewareStorage {
    constructor() {
        this.dataStorage = {};
        this.storage = new indexeddb_service_js_1.IndexedDBService();
    }
    getItem(key) {
        return this.dataStorage[key];
    }
    key() {
        return null;
    }
    removeItem(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.removeItem(key);
        });
    }
    setItem(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.setItem(key, value);
        });
    }
    clear() { }
}
exports.middlewareStorage = new MiddlewareStorage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21pZGRsZXdhcmUtc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxpRUFBMEQ7QUFFMUQsTUFBTSxpQkFBaUI7SUFLckI7UUFITyxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUkzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUNBQWdCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxHQUFHO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUssVUFBVSxDQUFDLEdBQVc7O1lBQzFCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLEdBQVcsRUFBRSxLQUFhOztZQUN0QyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFRCxLQUFLLEtBQVUsQ0FBQztDQUNqQjtBQUVZLFFBQUEsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4vaW5kZXhlZGRiLXNlcnZpY2UuanMnO1xuXG5jbGFzcyBNaWRkbGV3YXJlU3RvcmFnZSBpbXBsZW1lbnRzIFN0b3JhZ2Uge1xuICBsZW5ndGg6IGFueTtcbiAgcHVibGljIGRhdGFTdG9yYWdlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBzdG9yYWdlOiBJbmRleGVkREJTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBJbmRleGVkREJTZXJ2aWNlKCk7XG4gIH1cblxuICBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVN0b3JhZ2Vba2V5XTtcbiAgfVxuXG4gIGtleSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG5cbiAgYXN5bmMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZVN0b3JhZ2UgPSBuZXcgTWlkZGxld2FyZVN0b3JhZ2UoKTtcbiJdfQ==