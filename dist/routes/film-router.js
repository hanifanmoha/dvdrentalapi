"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const film_service_1 = __importDefault(require("../service/film-service"));
const filmRouter = express_1.default.Router();
filmRouter.get('/', (req, res) => {
    const films = film_service_1.default.getFilm();
    res.send(films);
});
filmRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const film = film_service_1.default.getFilmByID(parseInt(id));
    if (film) {
        res.send(film);
    }
    else {
        res.sendStatus(404);
    }
});
exports.default = filmRouter;
