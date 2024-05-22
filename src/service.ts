import { PaginationQuery } from './models/controller-models';
import { Film } from './models/data-models';
import * as repository from './repository';

export function getFilm(query: PaginationQuery): {
  result: Film[];
  totalData: number;
} {
  return repository.getFilms(query);
}

export function getFilmByID(id: number): Film | undefined {
  const film = repository.getFilmByID(id);
  if (!film) {
    return;
  }

  const language = repository.getLanguageByID(film.language_id);
  if (language) {
    film.language = language;
  }

  film.actors = repository.getActorsByFilmID(id);

  film.categories = repository.getCategriesByFilmID(id);

  return film;
}
