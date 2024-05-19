import { PaginationQuery } from './models/controller-models';
import dvdRentalRepo from './repository';

export function getFilm(query: PaginationQuery) {
  const films = dvdRentalRepo.getFilms(query);
  return films;
}

export function getFilmByID(id: number) {
  const film: any = dvdRentalRepo.getFilmByID(id);
  return film;
}
