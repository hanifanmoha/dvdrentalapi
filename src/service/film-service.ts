import DVDRentalRepo from '../repository/dvd-rental-repo';

function getFilm() {
  const films = DVDRentalRepo.getFilm();
  return films;
}

function getFilmByID(id: number) {
  const film = DVDRentalRepo.getFilmByID(id);
  return film;
}

const filmService = {
  getFilm,
  getFilmByID,
};

export default filmService;
