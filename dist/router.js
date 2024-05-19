"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmRouter = exports.indexRouter = void 0;
const express_1 = __importDefault(require("express"));
const service_1 = __importDefault(require("./service"));
const controller_utils_1 = require("./utils/controller-utils");
const indexRouter = express_1.default.Router();
exports.indexRouter = indexRouter;
indexRouter.get('/', (req, res) => {
    res.send('DVD Rental API');
});
const filmRouter = express_1.default.Router();
exports.filmRouter = filmRouter;
filmRouter.get('/', (req, res) => {
    const query = (0, controller_utils_1.parsePaginationQuery)(req.query);
    const { result, totalData } = service_1.default.getFilm(query);
    const response = (0, controller_utils_1.generatePaginationResponse)(query, result, totalData);
    res.send(response);
});
filmRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const film = service_1.default.getFilmByID(parseInt(id));
    if (film) {
        const response = (0, controller_utils_1.generateGeneralResponse)(true, 'Success get film', film, null);
        res.send(response);
    }
    else {
        res
            .status(404)
            .send((0, controller_utils_1.generateGeneralResponse)(false, 'Not Found', null, null));
    }
});
