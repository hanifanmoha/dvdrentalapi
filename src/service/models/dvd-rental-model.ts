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
  categories: Category;
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
