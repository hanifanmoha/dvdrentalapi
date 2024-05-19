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
exports.getFilmByID = exports.getFilms = exports.getIndex = void 0;
const service = __importStar(require("./service"));
const controller_utils_1 = require("./utils/controller-utils");
// Indexes
function getIndex(req, res) {
    (req, res) => {
        res.send('DVD Rental API');
    };
}
exports.getIndex = getIndex;
// Films
function getFilms(req, res) {
    const query = (0, controller_utils_1.parsePaginationQuery)(req.query);
    const { result, totalData } = service.getFilm(query);
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
