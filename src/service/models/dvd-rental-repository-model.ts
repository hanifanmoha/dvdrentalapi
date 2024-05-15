import { Actor, Category, Film, Language } from './dvd-rental-model';
import { PaginationQuery } from './utils';

export type DVDRentalRepositoryModel = {
  // Film
  getFilms: (query: PaginationQuery) => { result: Film[]; totalData: number };
  getFilmByID: (film_id: number) => Film | undefined;
  // // Category
  // getCategoriesByFilmID: (film_id: number) => Category[];
  // // Actor
  // getActorsByFilmID: (film_id: number) => Actor[];
  // // Language
  // getLanguageByID: (language_id: number) => Language;
};
