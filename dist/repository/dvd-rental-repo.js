"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import dvdRentalDB from './dvdrental';
const dvdRentalDB = require('../dvdrental.json');
function getFilm() {
    return dvdRentalDB.film;
}
function getFilmByID(id) {
    return dvdRentalDB.film.find((f) => f.film_id === id);
}
const DVDRentalRepo = { getFilm, getFilmByID };
exports.default = DVDRentalRepo;
