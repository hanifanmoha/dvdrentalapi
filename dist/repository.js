"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentsByRentalID = exports.getRentalByID = exports.getRentalsByCustomerID = exports.getStaffByStoreID = exports.getStaffByID = exports.getStaff = exports.getStoreByID = exports.getStores = exports.getCountryByID = exports.getCityByID = exports.getAddressByID = exports.getCustomerByID = exports.getCustomers = exports.getCategriesByFilmID = exports.getCategoryByID = exports.getCategories = exports.getActorsByFilmID = exports.getActorByID = exports.getActors = exports.getLanguageByID = exports.getLanguages = exports.getFilmByInventoryID = exports.getFilmsByCategoryID = exports.getFilmsByActorID = exports.getFilmsByLanguageID = exports.getFilmsByYear = exports.getFilmByID = exports.getFilms = exports.paginateList = exports.getList = void 0;
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
const inventories = lodash_1.default.sortBy(dvdRentalDB.inventory, [
    'inventory_id',
]);
const rentals = lodash_1.default.sortBy(dvdRentalDB.rental, ['rental_id']);
const payments = lodash_1.default.sortBy(dvdRentalDB.payment, ['payment_id']);
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
const inventoryAdapter = new repository_adapter_1.RepositoryAdapter(inventories);
const rentalAdapter = new repository_adapter_1.RepositoryAdapter(rentals);
const paymentAdapter = new repository_adapter_1.RepositoryAdapter(payments);
const filmCategoryAdapter = new repository_adapter_1.RepositoryAdapter(filmsCategories);
const filmActorAdapter = new repository_adapter_1.RepositoryAdapter(filmsActors);
// General
function getList(adapter, query) {
    if (query.page < 1) {
        return { result: [], totalData: 0 };
    }
    const filtered = adapter.getListBySearch(query.search);
    const start = query.length * (query.page - 1);
    const end = query.length * query.page;
    return {
        result: lodash_1.default.slice(filtered, start, end),
        totalData: filtered.length,
    };
}
exports.getList = getList;
function paginateList(list, query) {
    if (query.page < 1) {
        return { result: [], totalData: 0 };
    }
    const start = query.length * (query.page - 1);
    const end = query.length * query.page;
    return {
        result: lodash_1.default.slice(list, start, end),
        totalData: list.length,
    };
}
exports.paginateList = paginateList;
// Films
function getFilms(query) {
    if (query.page < 1) {
        return { result: [], totalData: 0 };
    }
    const filtered = filmAdapter.getListBySearch(query.search);
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
    return filmAdapter.getListByKey('release_year', 2006);
}
exports.getFilmsByYear = getFilmsByYear;
function getFilmsByLanguageID(languageID) {
    return filmAdapter.getListByKey('language_id', languageID);
}
exports.getFilmsByLanguageID = getFilmsByLanguageID;
function getFilmsByActorID(actorID) {
    const pivots = filmActorAdapter
        .getListByKey('actor_id', actorID)
        .map((p) => p.film_id);
    return filmAdapter.getListByKey('film_id', pivots);
}
exports.getFilmsByActorID = getFilmsByActorID;
function getFilmsByCategoryID(categoryID) {
    const pivots = filmCategoryAdapter
        .getListByKey('category_id', categoryID)
        .map((p) => p.film_id);
    return filmAdapter.getListByKey('film_id', pivots);
}
exports.getFilmsByCategoryID = getFilmsByCategoryID;
function getFilmByInventoryID(inventoryID) {
    const inventory = inventoryAdapter.getOne('inventory_id', inventoryID);
    if (!inventory)
        return;
    return filmAdapter.getOne('film_id', inventory.film_id);
}
exports.getFilmByInventoryID = getFilmByInventoryID;
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
function getActorsByFilmID(filmID) {
    const pivots = filmActorAdapter
        .getListByKey('film_id', filmID)
        .map((p) => p.actor_id);
    return actorAdapter.getListByKey('actor_id', pivots);
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
function getCategriesByFilmID(filmID) {
    const pivots = filmCategoryAdapter
        .getListByKey('film_id', filmID)
        .map((p) => p.category_id);
    return categoryAdapter.getListByKey('category_id', pivots);
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
    return staffAdapter.getListByKey('store_id', storeID);
}
exports.getStaffByStoreID = getStaffByStoreID;
// Rentals, Inventories, Payments
function getRentalsByCustomerID(customerID, query) {
    const rentals = rentalAdapter.getListByFilter({ customer_id: customerID });
    return paginateList(rentals, query);
}
exports.getRentalsByCustomerID = getRentalsByCustomerID;
function getRentalByID(id) {
    return rentalAdapter.getOne('rental_id', id);
}
exports.getRentalByID = getRentalByID;
function getPaymentsByRentalID(rentalID) {
    return paymentAdapter.getListByKey('rental_id', rentalID);
}
exports.getPaymentsByRentalID = getPaymentsByRentalID;
