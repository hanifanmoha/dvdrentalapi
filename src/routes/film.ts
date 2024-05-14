import express, { Router, Request, Response } from 'express';
import dvdRendalDBRepository from '../repository/dvdrentaldb';

const filmRouter: Router = express.Router();

filmRouter.get('/', (req: Request, res: Response) => {
  const films = dvdRendalDBRepository.getFilm();
  res.send(films);
});

export default filmRouter;
