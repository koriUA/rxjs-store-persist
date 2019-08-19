"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsBrowserEnv = () => {
    return typeof window !== 'undefined';
};
exports.validateStateKeys = (keys = []) => {
    return keys.map(key => {
        let attr = key;
        if (typeof attr !== 'string') {
            throw new TypeError(`localStorageSync Unknown Parameter Type: ` +
                `Expected type of string, got ${typeof attr}`);
        }
        return key;
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7SUFDcEMsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUE7QUFDdEMsQ0FBQyxDQUFDO0FBRVcsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLE9BQWMsRUFBRSxFQUFFLEVBQUU7SUFDcEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVmLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxTQUFTLENBQ2pCLDJDQUEyQztnQkFDM0MsZ0NBQWdDLE9BQU8sSUFBSSxFQUFFLENBQzlDLENBQUM7U0FDSDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2hlY2tJc0Jyb3dzZXJFbnYgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVTdGF0ZUtleXMgPSAoa2V5czogYW55W10gPSBbXSkgPT4ge1xyXG4gIHJldHVybiBrZXlzLm1hcChrZXkgPT4ge1xyXG4gICAgbGV0IGF0dHIgPSBrZXk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBhdHRyICE9PSAnc3RyaW5nJykge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIGBsb2NhbFN0b3JhZ2VTeW5jIFVua25vd24gUGFyYW1ldGVyIFR5cGU6IGAgK1xyXG4gICAgICAgIGBFeHBlY3RlZCB0eXBlIG9mIHN0cmluZywgZ290ICR7dHlwZW9mIGF0dHJ9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleTtcclxuICB9KTtcclxufTtcclxuIl19