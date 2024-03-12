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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO0lBQ3BDLE9BQU8sT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFBO0FBQ3RDLENBQUMsQ0FBQztBQUZXLFFBQUEsaUJBQWlCLHFCQUU1QjtBQUVLLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFjLEVBQUUsRUFBRSxFQUFFO0lBQ3BELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFFZixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixNQUFNLElBQUksU0FBUyxDQUNqQiwyQ0FBMkM7Z0JBQzNDLGdDQUFnQyxPQUFPLElBQUksRUFBRSxDQUM5QyxDQUFDO1NBQ0g7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBWlcsUUFBQSxpQkFBaUIscUJBWTVCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNoZWNrSXNCcm93c2VyRW52ID0gKCkgPT4ge1xyXG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU3RhdGVLZXlzID0gKGtleXM6IGFueVtdID0gW10pID0+IHtcclxuICByZXR1cm4ga2V5cy5tYXAoa2V5ID0+IHtcclxuICAgIGxldCBhdHRyID0ga2V5O1xyXG5cclxuICAgIGlmICh0eXBlb2YgYXR0ciAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBgbG9jYWxTdG9yYWdlU3luYyBVbmtub3duIFBhcmFtZXRlciBUeXBlOiBgICtcclxuICAgICAgICBgRXhwZWN0ZWQgdHlwZSBvZiBzdHJpbmcsIGdvdCAke3R5cGVvZiBhdHRyfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBrZXk7XHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==