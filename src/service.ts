import { PaginationQuery } from './models/controller-models';
import { Actor, Category, Film, Language } from './models/data-models';
import * as repository from './repository';

// Films

export function getFilms(query: PaginationQuery): {
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

// Languages

export function getLanguages(query: PaginationQuery): {
  result: Language[];
  totalData: number;
} {
  return repository.getLanguages(query);
}

export function getLanguageByID(id: number): Language | undefined {
  const language = repository.getLanguageByID(id);
  if (!language) {
    return;
  }

  return language;
}

// Actors

export function getActors(query: PaginationQuery): {
  result: Actor[];
  totalData: number;
} {
  return repository.getActors(query);
}

export function getActorByID(id: number): Actor | undefined {
  const actor = repository.getActorByID(id);
  if (!actor) {
    return;
  }

  return actor;
}

// Categories

export function getCategories(query: PaginationQuery): {
  result: Category[];
  totalData: number;
} {
  return repository.getCategories(query);
}

export function getCategoryByID(id: number): Category | undefined {
  const category = repository.getCategoryByID(id);
  if (!category) {
    return;
  }

  return category;
}
