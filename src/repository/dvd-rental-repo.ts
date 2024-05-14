// import dvdRentalDB from './dvdrental';
const dvdRentalDB = require('../dvdrental.json');

function getFilm() {
  return dvdRentalDB.film;
}

function getFilmByID(id: number) {
  return dvdRentalDB.film.find((f: any) => f.film_id === id);
}

const DVDRentalRepo = { getFilm, getFilmByID };

export default DVDRentalRepo;
