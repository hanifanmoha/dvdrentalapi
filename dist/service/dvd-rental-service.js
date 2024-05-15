"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dvd_rental_repo_1 = __importDefault(require("../repository/dvd-rental-repo"));
const repository = dvd_rental_repo_1.default;
function getFilm(query) {
    const films = repository.getFilms(query);
    return films;
}
function getFilmByID(id) {
    const film = repository.getFilmByID(id);
    return film;
}
const dvdRentalService = {
    getFilm,
    getFilmByID,
};
exports.default = dvdRentalService;
