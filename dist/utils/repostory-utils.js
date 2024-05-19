"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSearch = void 0;
const lodash_1 = __importDefault(require("lodash"));
function filterSearch(array, search, keys) {
    const filtered = lodash_1.default.filter(array, (t) => {
        const values = keys.map((key) => t[key]);
        for (let val of values) {
            if (lodash_1.default.includes(val.toLowerCase(), search)) {
                return true;
            }
        }
        return false;
    });
    return filtered;
}
exports.filterSearch = filterSearch;
