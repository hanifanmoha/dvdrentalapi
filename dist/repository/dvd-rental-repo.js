"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const utils_1 = require("./utils/utils");
// import dvdRentalDB from './dvdrental';
const dvdRentalDB = require('../../dvdrental.json');
const films = lodash_1.default.sortBy(dvdRentalDB.film, ['film_id']);
const categories = lodash_1.default.sortBy(dvdRentalDB.category, ['category_id']);
const languages = lodash_1.default.sortBy(dvdRentalDB.language, ['language_id']);
const actors = lodash_1.default.sortBy(dvdRentalDB.actor, ['actor_id']);
class DVDRentalRepo {
    getFilms(query) {
        if (query.page < 1) {
            return { result: [], totalData: 0 };
        }
        const filtered = (0, utils_1.filterSearch)(films, query.search, [
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
    getFilmByID(film_id) {
        const film = films.find((f) => f.film_id === film_id);
        return film;
    }
}
const dvdRentalRepo = new DVDRentalRepo();
exports.default = dvdRentalRepo;
