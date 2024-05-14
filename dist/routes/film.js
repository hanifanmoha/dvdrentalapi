"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dvdrentaldb_1 = __importDefault(require("../repository/dvdrentaldb"));
const filmRouter = express_1.default.Router();
filmRouter.get('/', (req, res) => {
    const films = dvdrentaldb_1.default.getFilm();
    res.send(films);
});
filmRouter.get('/test', (req, res) => {
    res.send({ test: 123456 });
});
exports.default = filmRouter;
