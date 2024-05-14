const data = require('./dvdrental.json');

function getFilm() {
  return data.film;
}

function getFilmByID(id: number) {
  return data.film.find((f: any) => f.film_id === id);
}

const DVDRentalRepo = { getFilm, getFilmByID };

export default DVDRentalRepo;
