import express, { Router } from 'express';
import * as controller from './controller';

const router: Router = express.Router();

const filmRouter: Router = express.Router();
filmRouter.get('/', controller.getFilms);
filmRouter.get('/:id', controller.getFilmByID);

router.get('/', controller.getIndex);
router.use('/films', filmRouter);

export default router;
