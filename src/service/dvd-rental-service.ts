import DVDRentalRepo from '../repository/dvd-rental-repo';
import { DVDRentalRepositoryModel } from './models/dvd-rental-repository-model';

import { PaginationQuery } from './models/utils';

const repository: DVDRentalRepositoryModel = DVDRentalRepo;

function getFilm(query: PaginationQuery) {
  const films = repository.getFilms(query);
  return films;
}

function getFilmByID(id: number) {
  const film: any = repository.getFilmByID(id);
  return film;
}

const dvdRentalService = {
  getFilm,
  getFilmByID,
};

export default dvdRentalService;
