export type Film = {
  // default
  film_id: number;
  title: string;
  description: string;
  release_year: number;
  language_id: number;
  rental_duration: number;
  rental_rate: number;
  length: number;
  replacement_cost: number;
  rating: string;
  last_update: string;
  special_features: string;
  fulltext: string;
  // additionals
  actors: Actor[];
  language: Language;
  categories: Category[];
};

export type Actor = {
  // default
  actor_id: number;
  first_name: string;
  last_name: string;
  last_update: string;
  // additionals
  films: Film[];
};

export type Category = {
  // default
  category_id: number;
  name: string;
  last_update: string;
  // additionals
  films: Film[];
};

export type Language = {
  // default
  language_id: number;
  name: string;
  last_update: string;
  // additionals
  films: Film[];
};

export type FilmCategory = {
  // default
  film_id: number;
  category_id: number;
  last_update: string;
};

export type FilmActor = {
  // default
  actor_id: number;
  film_id: number;
  last_update: string;
};

export type Customer = {
  // default
  customer_id: number;
  store_id: number;
  first_name: string;
  last_name: string;
  email: string;
  address_id: number;
  activebool: boolean;
  create_date: string;
  last_update: string;
  active: number;
  // additionals
  address: Address;
};

export type Address = {
  // default
  address_id: number;
  address: string;
  address2: string | null;
  district: string;
  city_id: number;
  postal_code: string;
  phone: string;
  last_update: string;
  // additionals
  city: City;
};

export type City = {
  // default
  city_id: number;
  city: string;
  country_id: number;
  last_update: string;
  // additionals
  country: Country;
};

export type Country = {
  // default
  country_id: number;
  country: string;
  last_update: string;
};
