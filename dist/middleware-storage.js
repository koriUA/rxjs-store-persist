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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21pZGRsZXdhcmUtc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBaUQ7QUFFakQsTUFBTSxpQkFBaUI7SUFBdkI7UUFFUyxnQkFBVyxHQUFRLEVBQUUsQ0FBQztJQW1CL0IsQ0FBQztJQWpCQyxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixlQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDaEMsZUFBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELEtBQUssS0FBVSxDQUFDO0NBQ2pCO0FBRVksUUFBQSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0IGFzIGxvY2FsZm9yYWdlIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5jbGFzcyBNaWRkbGV3YXJlU3RvcmFnZSBpbXBsZW1lbnRzIFN0b3JhZ2Uge1xyXG4gIGxlbmd0aDogYW55O1xyXG4gIHB1YmxpYyBkYXRhU3RvcmFnZTogYW55ID0ge307XHJcblxyXG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFTdG9yYWdlW2tleV07XHJcbiAgfVxyXG5cclxuICBrZXkoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxvY2FsZm9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICB9XHJcblxyXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxvY2FsZm9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpOiB2b2lkIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtaWRkbGV3YXJlU3RvcmFnZSA9IG5ldyBNaWRkbGV3YXJlU3RvcmFnZSgpO1xyXG4iXX0=