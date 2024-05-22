"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategriesByFilmID = exports.getCategoryByID = exports.getCategories = exports.getActorsByFilmID = exports.getActorByID = exports.getActors = exports.getLanguageByID = exports.getLanguages = exports.getFilmByID = exports.getFilmsByYear = exports.getFilms = exports.getList = void 0;
const lodash_1 = __importDefault(require("lodash"));
const repository_adapter_1 = require("./utils/repository-adapter");
const dvdRentalDB = require('../dvdrental.json');
const films = lodash_1.default.sortBy(dvdRentalDB.film, ['film_id']);
const categories = lodash_1.default.sortBy(dvdRentalDB.category, ['category_id']);
const languages = lodash_1.default.sortBy(dvdRentalDB.language, ['language_id']);
const actors = lodash_1.default.sortBy(dvdRentalDB.actor, ['actor_id']);
const filmsCategories = dvdRentalDB.film_category;
const filmsActors = dvdRentalDB.film_actor;
const filmAdapter = new repository_adapter_1.RepositoryAdapter(films, 'film_id', [
    'title',
    'description',
]);
const languageAdapter = new repository_adapter_1.RepositoryAdapter(languages, 'language_id', [
    'name',
]);
const categoryAdapter = new repository_adapter_1.RepositoryAdapter(categories, 'category_id', [
    'name',
]);
const actorAdapter = new repository_adapter_1.RepositoryAdapter(actors, 'actor_id', [
    'first_name',
    'last_name',
]);
const filmCategoryAdapter = new repository_adapter_1.RepositoryAdapterRelation(filmsCategories, films, categories, 'film_id', 'category_id');
const filmActorAdapter = new repository_adapter_1.RepositoryAdapterRelation(filmsActors, films, actors, 'film_id', 'actor_id');
// General
function getList(adapter, query) {
    if (query.page < 1) {
        return { result: [], totalData: 0 };
    }
    const filtered = adapter.getFiltered(query.search);
    const start = query.length * (query.page - 1);
    const end = query.length * query.page;
    return {
        result: lodash_1.default.slice(filtered, start, end),
        totalData: filtered.length,
    };
}
exports.getList = getList;
// Films
function getFilms(query) {
    if (query.page < 1) {
        return { result: [], totalData: 0 };
    }
    const filtered = filmAdapter.getFiltered(query.search);
    const start = query.length * (query.page - 1);
    const end = query.length * query.page;
    return {
        result: lodash_1.default.slice(filtered, start, end),
        totalData: filtered.length,
    };
}
exports.getFilms = getFilms;
function getFilmsByYear(year) {
    return filmAdapter.getByKey('release_year', 2006);
}
exports.getFilmsByYear = getFilmsByYear;
function getFilmByID(id) {
    return filmAdapter.getByID(id);
}
exports.getFilmByID = getFilmByID;
// Languages
function getLanguages(query) {
    return getList(languageAdapter, query);
}
exports.getLanguages = getLanguages;
function getLanguageByID(id) {
    return languageAdapter.getByID(id);
}
exports.getLanguageByID = getLanguageByID;
// Actors
function getActors(query) {
    return getList(actorAdapter, query);
}
exports.getActors = getActors;
function getActorByID(id) {
    return actorAdapter.getByID(id);
}
exports.getActorByID = getActorByID;
function getActorsByFilmID(filmId) {
    return filmActorAdapter.getByA(filmId);
}
exports.getActorsByFilmID = getActorsByFilmID;
// Categories
function getCategories(query) {
    return getList(categoryAdapter, query);
}
exports.getCategories = getCategories;
function getCategoryByID(id) {
    return categoryAdapter.getByID(id);
}
exports.getCategoryByID = getCategoryByID;
function getCategriesByFilmID(filmId) {
    return filmCategoryAdapter.getByA(filmId);
}
exports.getCategriesByFilmID = getCategriesByFilmID;
