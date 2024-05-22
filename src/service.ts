import { PaginationQuery } from './models/controller-models';
import {
  Actor,
  Category,
  Customer,
  Film,
  Language,
  Staff,
  Store,
} from './models/data-models';
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
  language.films = repository.getFilmsByLanguageID(id);
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
  actor.films = repository.getFilmsByActorID(id);
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
  category.films = repository.getFilmsByCategoryID(id);
  return category;
}

// Customers

export function getCustomers(query: PaginationQuery): {
  result: Customer[];
  totalData: number;
} {
  return repository.getCustomers(query);
}

export function getCustomerByID(id: number): Customer | undefined {
  const customer = repository.getCustomerByID(id);
  if (!customer) {
    return;
  }
  const address = repository.getAddressByID(customer.address_id);
  if (address) {
    const city = repository.getCityByID(address.city_id);
    if (city) {
      const country = repository.getCountryByID(city.country_id);
      if (country) {
        city.country = country;
      }
      address.city = city;
    }
    customer.address = address;
  }
  return customer;
}

// Stores & Staff

export function getStores(query: PaginationQuery): {
  result: Store[];
  totalData: number;
} {
  return repository.getStores(query);
}

export function getStoreByID(id: number): Store | undefined {
  const store = repository.getStoreByID(id);
  if (!store) {
    return;
  }
  const address = repository.getAddressByID(store.address_id);
  if (address) {
    const city = repository.getCityByID(address.city_id);
    if (city) {
      const country = repository.getCountryByID(city.country_id);
      if (country) {
        city.country = country;
      }
      address.city = city;
    }
    store.address = address;
  }
  const manager = repository.getStaffByID(store.manager_staff_id);
  if (manager) {
    store.manager = manager;
  }
  store.staff = repository
    .getStaffByStoreID(id)
    .filter((staff) => staff.staff_id !== store.manager_staff_id);
  return store;
}

export function getStaff(query: PaginationQuery): {
  result: Staff[];
  totalData: number;
} {
  return repository.getStaff(query);
}

export function getStaffByID(id: number): Staff | undefined {
  const staff = repository.getStaffByID(id);
  if (!staff) {
    return;
  }
  const address = repository.getAddressByID(staff.address_id);
  if (address) {
    const city = repository.getCityByID(address.city_id);
    if (city) {
      const country = repository.getCountryByID(city.country_id);
      if (country) {
        city.country = country;
      }
      address.city = city;
    }
    staff.address = address;
  }
  const store = repository.getStoreByID(staff.store_id);
  if (store) {
    staff.store = store;
  }
  return staff;
}
