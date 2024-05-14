"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require('./dvdrental.json');
function getFilm() {
    return data.film;
}
function getFilmByID(id) {
    return data.film.find((f) => f.film_id === id);
}
const DVDRentalRepo = { getFilm, getFilmByID };
exports.default = DVDRentalRepo;
