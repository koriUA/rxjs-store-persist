"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21pZGRsZXdhcmUtc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFpRDtBQUVqRCxNQUFNLGlCQUFpQjtJQUF2QjtRQUVTLGdCQUFXLEdBQVEsRUFBRSxDQUFDO0lBbUIvQixDQUFDO0lBakJDLE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLGVBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUNoQyxlQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsS0FBSyxLQUFVLENBQUM7Q0FDakI7QUFFWSxRQUFBLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHQgYXMgbG9jYWxmb3JhZ2UgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmNsYXNzIE1pZGRsZXdhcmVTdG9yYWdlIGltcGxlbWVudHMgU3RvcmFnZSB7XHJcbiAgbGVuZ3RoOiBhbnk7XHJcbiAgcHVibGljIGRhdGFTdG9yYWdlOiBhbnkgPSB7fTtcclxuXHJcbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVN0b3JhZ2Vba2V5XTtcclxuICB9XHJcblxyXG4gIGtleSgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbG9jYWxmb3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIH1cclxuXHJcbiAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbG9jYWxmb3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCk6IHZvaWQge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1pZGRsZXdhcmVTdG9yYWdlID0gbmV3IE1pZGRsZXdhcmVTdG9yYWdlKCk7XHJcbiJdfQ==