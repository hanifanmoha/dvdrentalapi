import _ from 'lodash';
import { Actor, Category, Film, Language } from './models/data-models';
import { PaginationQuery } from './models/controller-models';
import { filterSearch } from './utils/repostory-utils';

// import dvdRentalDB from './dvdrental';
const dvdRentalDB = require('../dvdrental.json');

const films: Film[] = _.sortBy(dvdRentalDB.film, ['film_id']);
const categories: Category[] = _.sortBy(dvdRentalDB.category, ['category_id']);
const languages: Language[] = _.sortBy(dvdRentalDB.language, ['language_id']);
const actors: Actor[] = _.sortBy(dvdRentalDB.actor, ['actor_id']);

class DVDRentalRepo {
  getFilms(query: PaginationQuery): { result: Film[]; totalData: number } {
    if (query.page < 1) {
      return { result: [], totalData: 0 };
    }

    const filtered = filterSearch<Film>(films, query.search, [
      'title',
      'description',
    ]);

    const start = query.length * (query.page - 1);
    const end = query.length * query.page;
    return {
      result: _.slice(filtered, start, end),
      totalData: filtered.length,
    };
  }

  getFilmByID(film_id: number): Film | undefined {
    const film = films.find((f) => f.film_id === film_id);
    return film;
  }
}

const dvdRentalRepo = new DVDRentalRepo();

export default dvdRentalRepo;
