import _ from 'lodash';
import {
  Actor,
  Category,
  Film,
  FilmActor,
  FilmCategory,
  Language,
} from './models/data-models';
import { PaginationQuery } from './models/controller-models';
import {
  RepositoryAdapter,
  RepositoryAdapterRelation,
} from './utils/repository-adapter';

const dvdRentalDB = require('../dvdrental.json');

const films: Film[] = _.sortBy(dvdRentalDB.film, ['film_id']);
const categories: Category[] = _.sortBy(dvdRentalDB.category, ['category_id']);
const languages: Language[] = _.sortBy(dvdRentalDB.language, ['language_id']);
const actors: Actor[] = _.sortBy(dvdRentalDB.actor, ['actor_id']);

const filmsCategories: FilmCategory[] = dvdRentalDB.film_category;
const filmsActors: FilmActor[] = dvdRentalDB.film_actor;

const filmAdapter = new RepositoryAdapter(films, 'film_id', [
  'title',
  'description',
]);
const languageAdapter = new RepositoryAdapter(languages, 'language_id', [
  'name',
]);
const categoryAdapter = new RepositoryAdapter(categories, 'category_id', [
  'name',
]);
const actorAdapter = new RepositoryAdapter(actors, 'actor_id', [
  'first_name',
  'last_name',
]);

const filmCategoryAdapter = new RepositoryAdapterRelation(
  filmsCategories,
  films,
  categories,
  'film_id',
  'category_id'
);
const filmActorAdapter = new RepositoryAdapterRelation(
  filmsActors,
  films,
  actors,
  'film_id',
  'actor_id'
);

// General

export function getList<T>(
  adapter: RepositoryAdapter<T>,
  query: PaginationQuery
): {
  result: T[];
  totalData: number;
} {
  if (query.page < 1) {
    return { result: [], totalData: 0 };
  }
  const filtered = adapter.getFiltered(query.search);

  const start = query.length * (query.page - 1);
  const end = query.length * query.page;
  return {
    result: _.slice(filtered, start, end),
    totalData: filtered.length,
  };
}

// Films

export function getFilms(query: PaginationQuery): {
  result: Film[];
  totalData: number;
} {
  if (query.page < 1) {
    return { result: [], totalData: 0 };
  }

  const filtered = filmAdapter.getFiltered(query.search);

  const start = query.length * (query.page - 1);
  const end = query.length * query.page;
  return {
    result: _.slice(filtered, start, end),
    totalData: filtered.length,
  };
}

export function getFilmsByYear(year: number): Film[] {
  return filmAdapter.getByKey('release_year', 2006);
}

export function getFilmByID(id: number): Film | undefined {
  return filmAdapter.getByID(id);
}

// Languages

export function getLanguages(query: PaginationQuery): {
  result: Language[];
  totalData: number;
} {
  return getList(languageAdapter, query);
}

export function getLanguageByID(id: number): Language | undefined {
  return languageAdapter.getByID(id);
}

// Actors

export function getActors(query: PaginationQuery): {
  result: Actor[];
  totalData: number;
} {
  return getList(actorAdapter, query);
}

export function getActorByID(id: number): Actor | undefined {
  return actorAdapter.getByID(id);
}

export function getActorsByFilmID(filmId: number): Actor[] {
  return filmActorAdapter.getByA(filmId);
}

// Categories

export function getCategories(query: PaginationQuery): {
  result: Category[];
  totalData: number;
} {
  return getList(categoryAdapter, query);
}

export function getCategoryByID(id: number): Category | undefined {
  return categoryAdapter.getByID(id);
}

export function getCategriesByFilmID(filmId: number): Category[] {
  return filmCategoryAdapter.getByA(filmId);
}
