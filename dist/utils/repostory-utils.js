"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSearch = void 0;
const lodash_1 = __importDefault(require("lodash"));
function filterSearch(array, search, keys) {
    const filtered = lodash_1.default.filter(array, (t) => {
        for (let key of keys) {
            const val = t[key];
            if (lodash_1.default.includes(val.toLowerCase(), search.toLowerCase())) {
                return true;
            }
        }
        return false;
    });
    return filtered;
}
exports.filterSearch = filterSearch;
