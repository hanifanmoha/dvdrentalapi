import { PaginationQuery } from './models/controller-models';
import * as repository from './repository';

export function getFilm(query: PaginationQuery) {
  const films = repository.getFilms(query);
  return films;
}

export function getFilmByID(id: number) {
  const film: any = repository.getFilmByID(id);
  return film;
}
