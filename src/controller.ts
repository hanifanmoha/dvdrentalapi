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
import { Film } from './models/data-models';

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
  const { result, totalData } = service.getFilm(query);
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
