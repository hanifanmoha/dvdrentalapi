"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require('./dvdrental.json');
function getFilm() {
    return data.actor;
}
const dvdRendalDBRepository = { getFilm };
exports.default = dvdRendalDBRepository;
