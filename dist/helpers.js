"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStateKeys = exports.checkIsBrowserEnv = void 0;
const checkIsBrowserEnv = () => {
    return typeof window !== 'undefined';
};
exports.checkIsBrowserEnv = checkIsBrowserEnv;
const validateStateKeys = (keys = []) => {
    return keys.map(key => {
        let attr = key;
        if (typeof attr !== 'string') {
            throw new TypeError(`localStorageSync Unknown Parameter Type: ` +
                `Expected type of string, got ${typeof attr}`);
        }
        return key;
    });
};
exports.validateStateKeys = validateStateKeys;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO0lBQ3BDLE9BQU8sT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFBO0FBQ3RDLENBQUMsQ0FBQztBQUZXLFFBQUEsaUJBQWlCLHFCQUU1QjtBQUVLLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFjLEVBQUUsRUFBRSxFQUFFO0lBQ3BELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFFZixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixNQUFNLElBQUksU0FBUyxDQUNqQiwyQ0FBMkM7Z0JBQzNDLGdDQUFnQyxPQUFPLElBQUksRUFBRSxDQUM5QyxDQUFDO1NBQ0g7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBWlcsUUFBQSxpQkFBaUIscUJBWTVCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNoZWNrSXNCcm93c2VyRW52ID0gKCkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVN0YXRlS2V5cyA9IChrZXlzOiBhbnlbXSA9IFtdKSA9PiB7XG4gIHJldHVybiBrZXlzLm1hcChrZXkgPT4ge1xuICAgIGxldCBhdHRyID0ga2V5O1xuXG4gICAgaWYgKHR5cGVvZiBhdHRyICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYGxvY2FsU3RvcmFnZVN5bmMgVW5rbm93biBQYXJhbWV0ZXIgVHlwZTogYCArXG4gICAgICAgIGBFeHBlY3RlZCB0eXBlIG9mIHN0cmluZywgZ290ICR7dHlwZW9mIGF0dHJ9YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG59O1xuIl19