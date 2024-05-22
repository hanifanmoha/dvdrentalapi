import _ from 'lodash';
import {
  Actor,
  Address,
  Category,
  City,
  Country,
  Customer,
  Film,
  FilmActor,
  FilmCategory,
  Language,
  Staff,
  Store,
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
const customer: Customer[] = _.sortBy(dvdRentalDB.customer, ['customer_id']);
const staff: Staff[] = _.sortBy(dvdRentalDB.staff, ['staff_id']);
const stores: Store[] = _.sortBy(dvdRentalDB.store, ['store_id']);

const addresses: Address[] = dvdRentalDB.address;
const cities: City[] = dvdRentalDB.city;
const countries: Country[] = dvdRentalDB.country;
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
const customerAdapter = new RepositoryAdapter(customer, 'customer_id', [
  'first_name',
  'last_name',
  'email',
]);
const staffAdapter = new RepositoryAdapter(staff, 'staff_id', [
  'first_name',
  'last_name',
  'email',
]);
const storeAdapter = new RepositoryAdapter(stores, 'store_id', ['name']);
const addressAdapter = new RepositoryAdapter(addresses, 'address_id', []);
const cityAdapter = new RepositoryAdapter(cities, 'city_id', []);
const countryAdapter = new RepositoryAdapter(countries, 'country_id', []);

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

export function getFilmByID(id: number): Film | undefined {
  return filmAdapter.getByID(id);
}

export function getFilmsByYear(year: number): Film[] {
  return filmAdapter.getByKey('release_year', 2006);
}

export function getFilmsByLanguageID(languageID: number): Film[] {
  return filmAdapter.getByKey('language_id', languageID);
}

export function getFilmsByActorID(actorID: number): Film[] {
  return filmActorAdapter.getByB(actorID);
}

export function getFilmsByCategoryID(categoryID: number): Film[] {
  return filmCategoryAdapter.getByB(categoryID);
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

// Customers

export function getCustomers(query: PaginationQuery): {
  result: Customer[];
  totalData: number;
} {
  return getList(customerAdapter, query);
}

export function getCustomerByID(id: number): Customer | undefined {
  return customerAdapter.getByID(id);
}

// Addresses, Cities, Countries

export function getAddressByID(id: number): Address | undefined {
  return addressAdapter.getByID(id);
}

export function getCityByID(id: number): City | undefined {
  return cityAdapter.getByID(id);
}

export function getCountryByID(id: number): Country | undefined {
  return countryAdapter.getByID(id);
}

// Stores, Staff

export function getStores(query: PaginationQuery): {
  result: Store[];
  totalData: number;
} {
  return getList(storeAdapter, query);
}

export function getStoreByID(id: number): Store | undefined {
  return storeAdapter.getByID(id);
}

export function getStaff(query: PaginationQuery): {
  result: Staff[];
  totalData: number;
} {
  return getList(staffAdapter, query);
}

export function getStaffByID(id: number): Staff | undefined {
  return staffAdapter.getByID(id);
}

export function getStaffByStoreID(storeID: number): Staff[] {
  return staffAdapter.getByKey('store_id', storeID);
}
