import express, { Router, Request, Response } from 'express';
import DVDRentalRepo from '../repository/dvd-rental-repo';
import filmService from '../service/film-service';

const filmRouter: Router = express.Router();

filmRouter.get('/', (req: Request, res: Response) => {
  const films = filmService.getFilm();
  res.send(films);
});

filmRouter.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const film = filmService.getFilmByID(parseInt(id));
  if (film) {
    res.send(film);
  } else {
    res.sendStatus(404);
  }
});

export default filmRouter;
