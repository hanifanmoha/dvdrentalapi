"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryAdapterRelation = exports.RepositoryAdapter = void 0;
const lodash_1 = __importDefault(require("lodash"));
class RepositoryAdapter {
    constructor(_list, _searchKeys = []) {
        this.list = _list;
        this.searchKeys = _searchKeys;
    }
    getAll() {
        return this.list;
    }
    getOne(key, value) {
        return this.list.find((f) => f[key] === value);
    }
    getListBySearch(search) {
        const filtered = lodash_1.default.filter(this.list, (t) => {
            for (let key of this.searchKeys) {
                const val = t[key];
                if (lodash_1.default.includes(val.toLowerCase(), search.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
        return filtered;
    }
    getListByKey(key, value) {
        if (lodash_1.default.isArray(value)) {
            return this.list.filter((item) => lodash_1.default.includes(value, item[key]));
        }
        else {
            return this.list.filter((item) => item[key] === value);
        }
    }
    getListByFilter(filter) {
        return lodash_1.default.filter(this.list, filter);
    }
}
exports.RepositoryAdapter = RepositoryAdapter;
class RepositoryAdapterRelation {
    constructor(_pivots, _listA, _listB, _primaryKeyA, _primaryKeyB) {
        this.pivots = _pivots;
        this.listA = _listA;
        this.listB = _listB;
        this.primaryKeyA = _primaryKeyA;
        this.primaryKeyB = _primaryKeyB;
    }
    getByA(id) {
        const filteredKeys = this.pivots
            .filter((item) => item[this.primaryKeyA] === id)
            .map((item) => item[this.primaryKeyB]);
        return this.listB.filter((item) => lodash_1.default.includes(filteredKeys, item[this.primaryKeyB]));
    }
    getByB(id) {
        const filteredKeys = this.pivots
            .filter((item) => item[this.primaryKeyB] === id)
            .map((item) => item[this.primaryKeyA]);
        return this.listA.filter((item) => lodash_1.default.includes(filteredKeys, item[this.primaryKeyA]));
    }
}
exports.RepositoryAdapterRelation = RepositoryAdapterRelation;
