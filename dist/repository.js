"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaffByStoreID = exports.getStaffByID = exports.getStaff = exports.getStoreByID = exports.getStores = exports.getCountryByID = exports.getCityByID = exports.getAddressByID = exports.getCustomerByID = exports.getCustomers = exports.getCategriesByFilmID = exports.getCategoryByID = exports.getCategories = exports.getActorsByFilmID = exports.getActorByID = exports.getActors = exports.getLanguageByID = exports.getLanguages = exports.getFilmsByCategoryID = exports.getFilmsByActorID = exports.getFilmsByLanguageID = exports.getFilmsByYear = exports.getFilmByID = exports.getFilms = exports.getList = void 0;
const lodash_1 = __importDefault(require("lodash"));
const repository_adapter_1 = require("./utils/repository-adapter");
const dvdRentalDB = require('../dvdrental.json');
const films = lodash_1.default.sortBy(dvdRentalDB.film, ['film_id']);
const categories = lodash_1.default.sortBy(dvdRentalDB.category, ['category_id']);
const languages = lodash_1.default.sortBy(dvdRentalDB.language, ['language_id']);
const actors = lodash_1.default.sortBy(dvdRentalDB.actor, ['actor_id']);
const customer = lodash_1.default.sortBy(dvdRentalDB.customer, ['customer_id']);
const staff = lodash_1.default.sortBy(dvdRentalDB.staff, ['staff_id']);
const stores = lodash_1.default.sortBy(dvdRentalDB.store, ['store_id']);
const addresses = dvdRentalDB.address;
const cities = dvdRentalDB.city;
const countries = dvdRentalDB.country;
const filmsCategories = dvdRentalDB.film_category;
const filmsActors = dvdRentalDB.film_actor;
const filmAdapter = new repository_adapter_1.RepositoryAdapter(films, ['title', 'description']);
const languageAdapter = new repository_adapter_1.RepositoryAdapter(languages, ['name']);
const categoryAdapter = new repository_adapter_1.RepositoryAdapter(categories, ['name']);
const actorAdapter = new repository_adapter_1.RepositoryAdapter(actors, ['first_name', 'last_name']);
const customerAdapter = new repository_adapter_1.RepositoryAdapter(customer, [
    'first_name',
    'last_name',
    'email',
]);
const staffAdapter = new repository_adapter_1.RepositoryAdapter(staff, [
    'first_name',
    'last_name',
    'email',
]);
const storeAdapter = new repository_adapter_1.RepositoryAdapter(stores, ['name']);
const addressAdapter = new repository_adapter_1.RepositoryAdapter(addresses);
const cityAdapter = new repository_adapter_1.RepositoryAdapter(cities);
const countryAdapter = new repository_adapter_1.RepositoryAdapter(countries);
const filmCategoryAdapter = new repository_adapter_1.RepositoryAdapter(filmsCategories);
const filmActorAdapter = new repository_adapter_1.RepositoryAdapter(filmsActors);
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
function getFilmByID(id) {
    return filmAdapter.getOne('film_id', id);
}
exports.getFilmByID = getFilmByID;
function getFilmsByYear(year) {
    return filmAdapter.getList('release_year', 2006);
}
exports.getFilmsByYear = getFilmsByYear;
function getFilmsByLanguageID(languageID) {
    return filmAdapter.getList('language_id', languageID);
}
exports.getFilmsByLanguageID = getFilmsByLanguageID;
function getFilmsByActorID(actorID) {
    const pivots = filmActorAdapter
        .getList('actor_id', actorID)
        .map((p) => p.film_id);
    return filmAdapter.getList('film_id', pivots);
}
exports.getFilmsByActorID = getFilmsByActorID;
function getFilmsByCategoryID(categoryID) {
    const pivots = filmCategoryAdapter
        .getList('category_id', categoryID)
        .map((p) => p.film_id);
    return filmAdapter.getList('film_id', pivots);
}
exports.getFilmsByCategoryID = getFilmsByCategoryID;
// Languages
function getLanguages(query) {
    return getList(languageAdapter, query);
}
exports.getLanguages = getLanguages;
function getLanguageByID(id) {
    return languageAdapter.getOne('language_id', id);
}
exports.getLanguageByID = getLanguageByID;
// Actors
function getActors(query) {
    return getList(actorAdapter, query);
}
exports.getActors = getActors;
function getActorByID(id) {
    return actorAdapter.getOne('actor_id', id);
}
exports.getActorByID = getActorByID;
function getActorsByFilmID(filmId) {
    const pivots = filmActorAdapter
        .getList('film_id', filmId)
        .map((p) => p.actor_id);
    return actorAdapter.getList('actor_id', pivots);
}
exports.getActorsByFilmID = getActorsByFilmID;
// Categories
function getCategories(query) {
    return getList(categoryAdapter, query);
}
exports.getCategories = getCategories;
function getCategoryByID(id) {
    return categoryAdapter.getOne('category_id', id);
}
exports.getCategoryByID = getCategoryByID;
function getCategriesByFilmID(filmId) {
    const pivots = filmCategoryAdapter
        .getList('film_id', filmId)
        .map((p) => p.category_id);
    return categoryAdapter.getList('category_id', pivots);
}
exports.getCategriesByFilmID = getCategriesByFilmID;
// Customers
function getCustomers(query) {
    return getList(customerAdapter, query);
}
exports.getCustomers = getCustomers;
function getCustomerByID(id) {
    return customerAdapter.getOne('customer_id', id);
}
exports.getCustomerByID = getCustomerByID;
// Addresses, Cities, Countries
function getAddressByID(id) {
    return addressAdapter.getOne('address_id', id);
}
exports.getAddressByID = getAddressByID;
function getCityByID(id) {
    return cityAdapter.getOne('city_id', id);
}
exports.getCityByID = getCityByID;
function getCountryByID(id) {
    return countryAdapter.getOne('country_id', id);
}
exports.getCountryByID = getCountryByID;
// Stores, Staff
function getStores(query) {
    return getList(storeAdapter, query);
}
exports.getStores = getStores;
function getStoreByID(id) {
    return storeAdapter.getOne('store_id', id);
}
exports.getStoreByID = getStoreByID;
function getStaff(query) {
    return getList(staffAdapter, query);
}
exports.getStaff = getStaff;
function getStaffByID(id) {
    return staffAdapter.getOne('staff_id', id);
}
exports.getStaffByID = getStaffByID;
function getStaffByStoreID(storeID) {
    return staffAdapter.getList('store_id', storeID);
}
exports.getStaffByStoreID = getStaffByStoreID;
