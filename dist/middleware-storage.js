"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareStorage = void 0;
const index_1 = require("./index");
class MiddlewareStorage {
    constructor() {
        this.dataStorage = {};
    }
    getItem(key) {
        return this.dataStorage[key];
    }
    key() {
        return null;
    }
    removeItem(key) {
        index_1.default.removeItem(key);
    }
    setItem(key, value) {
        index_1.default.setItem(key, value);
    }
    clear() { }
}
exports.middlewareStorage = new MiddlewareStorage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21pZGRsZXdhcmUtc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBaUQ7QUFFakQsTUFBTSxpQkFBaUI7SUFBdkI7UUFFUyxnQkFBVyxHQUFRLEVBQUUsQ0FBQztJQW1CL0IsQ0FBQztJQWpCQyxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixlQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDaEMsZUFBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELEtBQUssS0FBVSxDQUFDO0NBQ2pCO0FBRVksUUFBQSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0IGFzIGxvY2FsZm9yYWdlIH0gZnJvbSAnLi9pbmRleCc7XG5cbmNsYXNzIE1pZGRsZXdhcmVTdG9yYWdlIGltcGxlbWVudHMgU3RvcmFnZSB7XG4gIGxlbmd0aDogYW55O1xuICBwdWJsaWMgZGF0YVN0b3JhZ2U6IGFueSA9IHt9O1xuXG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU3RvcmFnZVtrZXldO1xuICB9XG5cbiAga2V5KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGxvY2FsZm9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxuXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsb2NhbGZvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZVN0b3JhZ2UgPSBuZXcgTWlkZGxld2FyZVN0b3JhZ2UoKTtcbiJdfQ==