"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryByID = exports.getCategories = exports.getActorByID = exports.getActors = exports.getLanguageByID = exports.getLanguages = exports.getFilmByID = exports.getFilms = void 0;
const repository = __importStar(require("./repository"));
// Films
function getFilms(query) {
    return repository.getFilms(query);
}
exports.getFilms = getFilms;
function getFilmByID(id) {
    const film = repository.getFilmByID(id);
    if (!film) {
        return;
    }
    const language = repository.getLanguageByID(film.language_id);
    if (language) {
        film.language = language;
    }
    film.actors = repository.getActorsByFilmID(id);
    film.categories = repository.getCategriesByFilmID(id);
    return film;
}
exports.getFilmByID = getFilmByID;
// Languages
function getLanguages(query) {
    return repository.getLanguages(query);
}
exports.getLanguages = getLanguages;
function getLanguageByID(id) {
    const language = repository.getLanguageByID(id);
    if (!language) {
        return;
    }
    return language;
}
exports.getLanguageByID = getLanguageByID;
// Actors
function getActors(query) {
    return repository.getActors(query);
}
exports.getActors = getActors;
function getActorByID(id) {
    const actor = repository.getActorByID(id);
    if (!actor) {
        return;
    }
    return actor;
}
exports.getActorByID = getActorByID;
// Categories
function getCategories(query) {
    return repository.getCategories(query);
}
exports.getCategories = getCategories;
function getCategoryByID(id) {
    const category = repository.getCategoryByID(id);
    if (!category) {
        return;
    }
    return category;
}
exports.getCategoryByID = getCategoryByID;
