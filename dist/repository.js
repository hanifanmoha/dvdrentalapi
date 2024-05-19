"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilmByID = exports.getFilms = void 0;
const lodash_1 = __importDefault(require("lodash"));
const repostory_utils_1 = require("./utils/repostory-utils");
// import dvdRentalDB from './dvdrental';
const dvdRentalDB = require('../dvdrental.json');
const films = lodash_1.default.sortBy(dvdRentalDB.film, ['film_id']);
const categories = lodash_1.default.sortBy(dvdRentalDB.category, ['category_id']);
const languages = lodash_1.default.sortBy(dvdRentalDB.language, ['language_id']);
const actors = lodash_1.default.sortBy(dvdRentalDB.actor, ['actor_id']);
function getFilms(query) {
    if (query.page < 1) {
        return { result: [], totalData: 0 };
    }
    const filtered = (0, repostory_utils_1.filterSearch)(films, query.search, [
        'title',
        'description',
    ]);
    const start = query.length * (query.page - 1);
    const end = query.length * query.page;
    return {
        result: lodash_1.default.slice(filtered, start, end),
        totalData: filtered.length,
    };
}
exports.getFilms = getFilms;
function getFilmByID(film_id) {
    const film = films.find((f) => f.film_id === film_id);
    return film;
}
exports.getFilmByID = getFilmByID;
