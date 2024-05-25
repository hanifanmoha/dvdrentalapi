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
  Inventory,
  Language,
  Payment,
  Rental,
  Staff,
  Store,
} from './models/data-models';
import { PaginationQuery } from './models/controller-models';
import { RepositoryAdapter } from './utils/repository-adapter';

const dvdRentalDB = require('../dvdrental.json');

const films: Film[] = _.sortBy(dvdRentalDB.film, ['film_id']);
const categories: Category[] = _.sortBy(dvdRentalDB.category, ['category_id']);
const languages: Language[] = _.sortBy(dvdRentalDB.language, ['language_id']);
const actors: Actor[] = _.sortBy(dvdRentalDB.actor, ['actor_id']);
const customer: Customer[] = _.sortBy(dvdRentalDB.customer, ['customer_id']);
const staff: Staff[] = _.sortBy(dvdRentalDB.staff, ['staff_id']);
const stores: Store[] = _.sortBy(dvdRentalDB.store, ['store_id']);
const inventories: Inventory[] = _.sortBy(dvdRentalDB.inventory, [
  'inventory_id',
]);
const rentals: Rental[] = _.sortBy(dvdRentalDB.rental, ['rental_id']);
const payments: Payment[] = _.sortBy(dvdRentalDB.payment, ['payment_id']);

const addresses: Address[] = dvdRentalDB.address;
const cities: City[] = dvdRentalDB.city;
const countries: Country[] = dvdRentalDB.country;
const filmsCategories: FilmCategory[] = dvdRentalDB.film_category;
const filmsActors: FilmActor[] = dvdRentalDB.film_actor;

const filmAdapter = new RepositoryAdapter(films, ['title', 'description']);
const languageAdapter = new RepositoryAdapter(languages, ['name']);
const categoryAdapter = new RepositoryAdapter(categories, ['name']);
const actorAdapter = new RepositoryAdapter(actors, ['first_name', 'last_name']);
const customerAdapter = new RepositoryAdapter(customer, [
  'first_name',
  'last_name',
  'email',
]);
const staffAdapter = new RepositoryAdapter(staff, [
  'first_name',
  'last_name',
  'email',
]);
const storeAdapter = new RepositoryAdapter(stores, ['name']);
const addressAdapter = new RepositoryAdapter(addresses);
const cityAdapter = new RepositoryAdapter(cities);
const countryAdapter = new RepositoryAdapter(countries);

const inventoryAdapter = new RepositoryAdapter(inventories);
const rentalAdapter = new RepositoryAdapter(rentals);
const paymentAdapter = new RepositoryAdapter(payments);

const filmCategoryAdapter = new RepositoryAdapter(filmsCategories);
const filmActorAdapter = new RepositoryAdapter(filmsActors);

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
  const filtered = adapter.getListBySearch(query.search);

  const start = query.length * (query.page - 1);
  const end = query.length * query.page;
  return {
    result: _.slice(filtered, start, end),
    totalData: filtered.length,
  };
}

export function paginateList<T>(
  list: T[],
  query: PaginationQuery
): {
  result: T[];
  totalData: number;
} {
  if (query.page < 1) {
    return { result: [], totalData: 0 };
  }
  const start = query.length * (query.page - 1);
  const end = query.length * query.page;
  return {
    result: _.slice(list, start, end),
    totalData: list.length,
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

  const filtered = filmAdapter.getListBySearch(query.search);

  const start = query.length * (query.page - 1);
  const end = query.length * query.page;
  return {
    result: _.slice(filtered, start, end),
    totalData: filtered.length,
  };
}

export function getFilmByID(id: number): Film | undefined {
  return filmAdapter.getOne('film_id', id);
}

export function getFilmsByYear(year: number): Film[] {
  return filmAdapter.getListByKey('release_year', 2006);
}

export function getFilmsByLanguageID(languageID: number): Film[] {
  return filmAdapter.getListByKey('language_id', languageID);
}

export function getFilmsByActorID(actorID: number): Film[] {
  const pivots = filmActorAdapter
    .getListByKey('actor_id', actorID)
    .map((p) => p.film_id);
  return filmAdapter.getListByKey('film_id', pivots);
}

export function getFilmsByCategoryID(categoryID: number): Film[] {
  const pivots = filmCategoryAdapter
    .getListByKey('category_id', categoryID)
    .map((p) => p.film_id);
  return filmAdapter.getListByKey('film_id', pivots);
}

export function getFilmByInventoryID(inventoryID: number): Film | undefined {
  const inventory = inventoryAdapter.getOne('inventory_id', inventoryID);
  if (!inventory) return;
  return filmAdapter.getOne('film_id', inventory.film_id);
}

// Languages

export function getLanguages(query: PaginationQuery): {
  result: Language[];
  totalData: number;
} {
  return getList(languageAdapter, query);
}

export function getLanguageByID(id: number): Language | undefined {
  return languageAdapter.getOne('language_id', id);
}

// Actors

export function getActors(query: PaginationQuery): {
  result: Actor[];
  totalData: number;
} {
  return getList(actorAdapter, query);
}

export function getActorByID(id: number): Actor | undefined {
  return actorAdapter.getOne('actor_id', id);
}

export function getActorsByFilmID(filmID: number): Actor[] {
  const pivots = filmActorAdapter
    .getListByKey('film_id', filmID)
    .map((p) => p.actor_id);
  return actorAdapter.getListByKey('actor_id', pivots);
}

// Categories

export function getCategories(query: PaginationQuery): {
  result: Category[];
  totalData: number;
} {
  return getList(categoryAdapter, query);
}

export function getCategoryByID(id: number): Category | undefined {
  return categoryAdapter.getOne('category_id', id);
}

export function getCategriesByFilmID(filmID: number): Category[] {
  const pivots = filmCategoryAdapter
    .getListByKey('film_id', filmID)
    .map((p) => p.category_id);
  return categoryAdapter.getListByKey('category_id', pivots);
}

// Customers

export function getCustomers(query: PaginationQuery): {
  result: Customer[];
  totalData: number;
} {
  return getList(customerAdapter, query);
}

export function getCustomerByID(id: number): Customer | undefined {
  return customerAdapter.getOne('customer_id', id);
}

// Addresses, Cities, Countries

export function getAddressByID(id: number): Address | undefined {
  return addressAdapter.getOne('address_id', id);
}

export function getCityByID(id: number): City | undefined {
  return cityAdapter.getOne('city_id', id);
}

export function getCountryByID(id: number): Country | undefined {
  return countryAdapter.getOne('country_id', id);
}

// Stores, Staff

export function getStores(query: PaginationQuery): {
  result: Store[];
  totalData: number;
} {
  return getList(storeAdapter, query);
}

export function getStoreByID(id: number): Store | undefined {
  return storeAdapter.getOne('store_id', id);
}

export function getStaff(query: PaginationQuery): {
  result: Staff[];
  totalData: number;
} {
  return getList(staffAdapter, query);
}

export function getStaffByID(id: number): Staff | undefined {
  return staffAdapter.getOne('staff_id', id);
}

export function getStaffByStoreID(storeID: number): Staff[] {
  return staffAdapter.getListByKey('store_id', storeID);
}

// Rentals, Inventories, Payments

export function getRentalsByCustomerID(
  customerID: number,
  query: PaginationQuery
): {
  result: Rental[];
  totalData: number;
} {
  const rentals = rentalAdapter.getListByFilter({ customer_id: customerID });
  return paginateList<Rental>(rentals, query);
}

export function getRentalByID(id: number): Rental | undefined {
  return rentalAdapter.getOne('rental_id', id);
}

export function getPaymentsByRentalID(rentalID: number): Payment[] {
  return paymentAdapter.getListByKey('rental_id', rentalID);
}
