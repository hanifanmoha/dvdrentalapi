import { Request, Response } from 'express';
import * as service from './service';
import {
  generateGeneralResponse,
  generatePaginationResponse,
  parsePaginationQuery,
} from './utils/controller-utils';
import {
  GeneralResponse,
  PaginationResponseData,
} from './models/controller-models';
import { Actor, Category, Film, Language } from './models/data-models';

// Indexes

export function getIndex(req: Request, res: Response) {
  (req: Request, res: Response) => {
    res.send('DVD Rental API');
  };
}

// Films

export function getFilms(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Film>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getFilms(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getFilmByID(
  req: Request,
  res: Response<GeneralResponse<Film | null>>
) {
  const { id } = req.params;
  const film = service.getFilmByID(parseInt(id));
  if (film) {
    const response = generateGeneralResponse(
      true,
      'Success get film',
      film,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}

// Languages

export function getLanguages(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Language>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getLanguages(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getLanguageByID(
  req: Request,
  res: Response<GeneralResponse<Language | null>>
) {
  const { id } = req.params;
  const language = service.getLanguageByID(parseInt(id));
  if (language) {
    const response = generateGeneralResponse(
      true,
      'Success get language',
      language,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}

// Actors

export function getActors(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Actor>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getActors(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getActorByID(
  req: Request,
  res: Response<GeneralResponse<Actor | null>>
) {
  const { id } = req.params;
  const actor = service.getActorByID(parseInt(id));
  if (actor) {
    const response = generateGeneralResponse(
      true,
      'Success get actor',
      actor,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}

// Categories

export function getCategories(
  req: Request,
  res: Response<GeneralResponse<PaginationResponseData<Category>>>
) {
  const query = parsePaginationQuery(req.query);
  const { result, totalData } = service.getCategories(query);
  const response = generatePaginationResponse(query, result, totalData);
  res.send(response);
}

export function getCategoryByID(
  req: Request,
  res: Response<GeneralResponse<Category | null>>
) {
  const { id } = req.params;
  const category = service.getCategoryByID(parseInt(id));
  if (category) {
    const response = generateGeneralResponse(
      true,
      'Success get categor',
      category,
      null
    );
    res.send(response);
  } else {
    res
      .status(404)
      .send(generateGeneralResponse(false, 'Not Found', null, null));
  }
}
