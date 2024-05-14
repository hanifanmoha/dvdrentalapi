"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dvd_rental_repo_1 = __importDefault(require("../repository/dvd-rental-repo"));
function getFilm() {
    const films = dvd_rental_repo_1.default.getFilm();
    return films;
}
function getFilmByID(id) {
    const film = dvd_rental_repo_1.default.getFilmByID(id);
    return film;
}
const filmService = {
    getFilm,
    getFilmByID,
};
exports.default = filmService;
