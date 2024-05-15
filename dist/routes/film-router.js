"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dvd_rental_service_1 = __importDefault(require("../service/dvd-rental-service"));
const utils_1 = require("./utils/utils");
const filmRouter = express_1.default.Router();
filmRouter.get('/', (req, res) => {
    const query = (0, utils_1.parsePaginationQuery)(req.query);
    const { result, totalData } = dvd_rental_service_1.default.getFilm(query);
    const response = (0, utils_1.generatePaginationResponse)(query, result, totalData);
    res.send(response);
});
filmRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const film = dvd_rental_service_1.default.getFilmByID(parseInt(id));
    if (film) {
        const response = (0, utils_1.generateGeneralResponse)(true, 'Success get film', film, null);
        res.send(response);
    }
    else {
        res
            .status(404)
            .send((0, utils_1.generateGeneralResponse)(false, 'Not Found', null, null));
    }
});
exports.default = filmRouter;
