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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRentalByID = exports.getStaffByID = exports.getStaff = exports.getStoreByID = exports.getStores = exports.getCustomerRental = exports.getCustomerByID = exports.getCustomers = exports.getCategoryByID = exports.getCategories = exports.getActorByID = exports.getActors = exports.getLanguageByID = exports.getLanguages = exports.getFilmByID = exports.getFilms = exports.getReadMe = exports.getIndex = void 0;
const service = __importStar(require("./service"));
const controller_utils_1 = require("./utils/controller-utils");
const path_1 = __importDefault(require("path"));
// Indexes
function getIndex(req, res) {
    res.render('index');
}
exports.getIndex = getIndex;
function getReadMe(req, res) {
    console.log('get readme');
    const p = path_1.default.join(__dirname, '..', 'README.md');
    res.sendFile(p);
}
exports.getReadMe = getReadMe;
// Films
function getFilms(req, res) {
    const query = (0, controller_utils_1.parsePaginationQuery)(req.query);
    const { result, totalData } = service.getFilms(query);
    const response = (0, controller_utils_1.generatePaginationResponse)(query, result, totalData);
    res.send(response);
}
exports.getFilms = getFilms;
function getFilmByID(req, res) {
    const { id } = req.params;
    const film = service.getFilmByID(parseInt(id));
    if (film) {
        const response = (0, controller_utils_1.generateGeneralResponse)(true, 'Success get film', film, null);
        res.send(response);
    }
    else {
        res
            .status(404)
            .send((0, controller_utils_1.generateGeneralResponse)(false, 'Not Found', null, null));
    }
}
exports.getFilmByID = getFilmByID;
// Languages
function getLanguages(req, res) {
    const query = (0, controller_utils_1.parsePaginationQuery)(req.query);
    const { result, totalData } = service.getLanguages(query);
    const response = (0, controller_utils_1.generatePaginationResponse)(query, result, totalData);
    res.send(response);
}
exports.getLanguages = getLanguages;
function getLanguageByID(req, res) {
    const { id } = req.params;
    const language = service.getLanguageByID(parseInt(id));
    if (language) {
        const response = (0, controller_utils_1.generateGeneralResponse)(true, 'Success get language', language, null);
        res.send(response);
    }
    else {
        res
            .status(404)
            .send((0, controller_utils_1.generateGeneralResponse)(false, 'Not Found', null, null));
    }
}
exports.getLanguageByID = getLanguageByID;
// Actors
function getActors(req, res) {
    const query = (0, controller_utils_1.parsePaginationQuery)(req.query);
    const { result, totalData } = service.getActors(query);
    const response = (0, controller_utils_1.generatePaginationResponse)(query, result, totalData);
    res.send(response);
}
exports.getActors = getActors;
function getActorByID(req, res) {
    const { id } = req.params;
    const actor = service.getActorByID(parseInt(id));
    if (actor) {
        const response = (0, controller_utils_1.generateGeneralResponse)(true, 'Success get actor', actor, null);
        res.send(response);
    }
    else {
        res
            .status(404)
            .send((0, controller_utils_1.generateGeneralResponse)(false, 'Not Found', null, null));
    }
}
exports.getActorByID = getActorByID;
// Categories
function getCategories(req, res) {
    const query = (0, controller_utils_1.parsePaginationQuery)(req.query);
    const { result, totalData } = service.getCategories(query);
    const response = (0, controller_utils_1.generatePaginationResponse)(query, result, totalData);
    res.send(response);
}
exports.getCategories = getCategories;
function getCategoryByID(req, res) {
    const { id } = req.params;
    const category = service.getCategoryByID(parseInt(id));
    if (category) {
        const response = (0, controller_utils_1.generateGeneralResponse)(true, 'Success get category', category, null);
        res.send(response);
    }
    else {
        res
            .status(404)
            .send((0, controller_utils_1.generateGeneralResponse)(false, 'Not Found', null, null));
    }
}
exports.getCategoryByID = getCategoryByID;
// Customers
function getCustomers(req, res) {
    const query = (0, controller_utils_1.parsePaginationQuery)(req.query);
    const { result, totalData } = service.getCustomers(query);
    const response = (0, controller_utils_1.generatePaginationResponse)(query, result, totalData);
    res.send(response);
}
exports.getCustomers = getCustomers;
function getCustomerByID(req, res) {
    const { id } = req.params;
    const customer = service.getCustomerByID(parseInt(id));
    if (customer) {
        const response = (0, controller_utils_1.generateGeneralResponse)(true, 'Success get customer', customer, null);
        res.send(response);
    }
    else {
        res
            .status(404)
            .send((0, controller_utils_1.generateGeneralResponse)(false, 'Not Found', null, null));
    }
}
exports.getCustomerByID = getCustomerByID;
function getCustomerRental(req, res) {
    const query = (0, controller_utils_1.parsePaginationQuery)(req.query);
    const { id } = req.params;
    const { result, totalData } = service.getCustomerRental(parseInt(id), query);
    const response = (0, controller_utils_1.generatePaginationResponse)(query, result, totalData);
    res.send(response);
}
exports.getCustomerRental = getCustomerRental;
// Stores & Staff
function getStores(req, res) {
    const query = (0, controller_utils_1.parsePaginationQuery)(req.query);
    const { result, totalData } = service.getStores(query);
    const response = (0, controller_utils_1.generatePaginationResponse)(query, result, totalData);
    res.send(response);
}
exports.getStores = getStores;
function getStoreByID(req, res) {
    const { id } = req.params;
    const store = service.getStoreByID(parseInt(id));
    if (store) {
        const response = (0, controller_utils_1.generateGeneralResponse)(true, 'Success get store', store, null);
        res.send(response);
    }
    else {
        res
            .status(404)
            .send((0, controller_utils_1.generateGeneralResponse)(false, 'Not Found', null, null));
    }
}
exports.getStoreByID = getStoreByID;
function getStaff(req, res) {
    const query = (0, controller_utils_1.parsePaginationQuery)(req.query);
    const { result, totalData } = service.getStaff(query);
    const response = (0, controller_utils_1.generatePaginationResponse)(query, result, totalData);
    res.send(response);
}
exports.getStaff = getStaff;
function getStaffByID(req, res) {
    const { id } = req.params;
    const staff = service.getStaffByID(parseInt(id));
    if (staff) {
        const response = (0, controller_utils_1.generateGeneralResponse)(true, 'Success get staff', staff, null);
        res.send(response);
    }
    else {
        res
            .status(404)
            .send((0, controller_utils_1.generateGeneralResponse)(false, 'Not Found', null, null));
    }
}
exports.getStaffByID = getStaffByID;
// Rentals, Inventories, Payments
function getRentalByID(req, res) {
    const { id } = req.params;
    const rental = service.getRentalByID(parseInt(id));
    if (rental) {
        const response = (0, controller_utils_1.generateGeneralResponse)(true, 'Success get rental', rental, null);
        res.send(response);
    }
    else {
        res
            .status(404)
            .send((0, controller_utils_1.generateGeneralResponse)(false, 'Not Found', null, null));
    }
}
exports.getRentalByID = getRentalByID;
