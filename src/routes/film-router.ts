import express, { Router, Request, Response } from 'express';
import filmService from '../service/dvd-rental-service';
import {
  generateGeneralResponse,
  generatePaginationResponse,
  parsePaginationQuery,
} from './utils/utils';
import { GeneralResponse, PaginationResponseData } from './models/models';
import { Film } from '../service/models/dvd-rental-model';

const filmRouter: Router = express.Router();

filmRouter.get(
  '/',
  (
    req: Request,
    res: Response<GeneralResponse<PaginationResponseData<Film>>>
  ) => {
    const query = parsePaginationQuery(req.query);
    const { result, totalData } = filmService.getFilm(query);
    const response = generatePaginationResponse(query, result, totalData);
    res.send(response);
  }
);

filmRouter.get(
  '/:id',
  (req: Request, res: Response<GeneralResponse<Film | null>>) => {
    const { id } = req.params;
    const film = filmService.getFilmByID(parseInt(id));
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
);

export default filmRouter;
