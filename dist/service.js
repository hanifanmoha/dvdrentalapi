"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilmByID = exports.getFilm = void 0;
const repository_1 = __importDefault(require("./repository"));
function getFilm(query) {
    const films = repository_1.default.getFilms(query);
    return films;
}
exports.getFilm = getFilm;
function getFilmByID(id) {
    const film = repository_1.default.getFilmByID(id);
    return film;
}
exports.getFilmByID = getFilmByID;
