import { PaginationQuery } from './models/controller-models';
import dvdRentalRepo from './repository';

function getFilm(query: PaginationQuery) {
  const films = dvdRentalRepo.getFilms(query);
  return films;
}

function getFilmByID(id: number) {
  const film: any = dvdRentalRepo.getFilmByID(id);
  return film;
}

const dvdRentalService = {
  getFilm,
  getFilmByID,
};

export default dvdRentalService;
