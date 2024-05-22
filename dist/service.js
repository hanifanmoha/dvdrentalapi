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
exports.getStaffByID = exports.getStaff = exports.getStoreByID = exports.getStores = exports.getCustomerByID = exports.getCustomers = exports.getCategoryByID = exports.getCategories = exports.getActorByID = exports.getActors = exports.getLanguageByID = exports.getLanguages = exports.getFilmByID = exports.getFilms = void 0;
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
    language.films = repository.getFilmsByLanguageID(id);
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
    actor.films = repository.getFilmsByActorID(id);
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
    category.films = repository.getFilmsByCategoryID(id);
    return category;
}
exports.getCategoryByID = getCategoryByID;
// Customers
function getCustomers(query) {
    return repository.getCustomers(query);
}
exports.getCustomers = getCustomers;
function getCustomerByID(id) {
    const customer = repository.getCustomerByID(id);
    if (!customer) {
        return;
    }
    const address = repository.getAddressByID(customer.address_id);
    if (address) {
        const city = repository.getCityByID(address.city_id);
        if (city) {
            const country = repository.getCountryByID(city.country_id);
            if (country) {
                city.country = country;
            }
            address.city = city;
        }
        customer.address = address;
    }
    return customer;
}
exports.getCustomerByID = getCustomerByID;
// Stores & Staff
function getStores(query) {
    return repository.getStores(query);
}
exports.getStores = getStores;
function getStoreByID(id) {
    const store = repository.getStoreByID(id);
    if (!store) {
        return;
    }
    const address = repository.getAddressByID(store.address_id);
    if (address) {
        const city = repository.getCityByID(address.city_id);
        if (city) {
            const country = repository.getCountryByID(city.country_id);
            if (country) {
                city.country = country;
            }
            address.city = city;
        }
        store.address = address;
    }
    const manager = repository.getStaffByID(store.manager_staff_id);
    if (manager) {
        store.manager = manager;
    }
    store.staff = repository
        .getStaffByStoreID(id)
        .filter((staff) => staff.staff_id !== store.manager_staff_id);
    return store;
}
exports.getStoreByID = getStoreByID;
function getStaff(query) {
    return repository.getStaff(query);
}
exports.getStaff = getStaff;
function getStaffByID(id) {
    const staff = repository.getStaffByID(id);
    if (!staff) {
        return;
    }
    const address = repository.getAddressByID(staff.address_id);
    if (address) {
        const city = repository.getCityByID(address.city_id);
        if (city) {
            const country = repository.getCountryByID(city.country_id);
            if (country) {
                city.country = country;
            }
            address.city = city;
        }
        staff.address = address;
    }
    const store = repository.getStoreByID(staff.store_id);
    if (store) {
        staff.store = store;
    }
    return staff;
}
exports.getStaffByID = getStaffByID;
