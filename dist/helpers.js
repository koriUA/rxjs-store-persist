"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsBrowserEnv = () => {
    return typeof window !== 'undefined';
};
exports.validateStateKeys = (keys) => {
    return keys.map(key => {
        let attr = key;
        if (typeof attr !== 'string') {
            throw new TypeError(`localStorageSync Unknown Parameter Type: ` +
                `Expected type of string, got ${typeof attr}`);
        }
        return key;
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7SUFDcEMsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUE7QUFDdEMsQ0FBQyxDQUFDO0FBRVcsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLElBQVcsRUFBRSxFQUFFO0lBQy9DLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFFZixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixNQUFNLElBQUksU0FBUyxDQUNqQiwyQ0FBMkM7Z0JBQzNDLGdDQUFnQyxPQUFPLElBQUksRUFBRSxDQUM5QyxDQUFDO1NBQ0g7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNoZWNrSXNCcm93c2VyRW52ID0gKCkgPT4ge1xyXG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU3RhdGVLZXlzID0gKGtleXM6IGFueVtdKSA9PiB7XHJcbiAgcmV0dXJuIGtleXMubWFwKGtleSA9PiB7XHJcbiAgICBsZXQgYXR0ciA9IGtleTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGF0dHIgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgYGxvY2FsU3RvcmFnZVN5bmMgVW5rbm93biBQYXJhbWV0ZXIgVHlwZTogYCArXHJcbiAgICAgICAgYEV4cGVjdGVkIHR5cGUgb2Ygc3RyaW5nLCBnb3QgJHt0eXBlb2YgYXR0cn1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5O1xyXG4gIH0pO1xyXG59O1xyXG4iXX0=