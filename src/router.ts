import express, { Router } from 'express';
import * as controller from './controller';

const router: Router = express.Router();

const filmRouter: Router = express.Router();
filmRouter.get('/', controller.getFilms);
filmRouter.get('/:id', controller.getFilmByID);

const languageRouter: Router = express.Router();
languageRouter.get('/', controller.getLanguages);
languageRouter.get('/:id', controller.getLanguageByID);

const actorRouter: Router = express.Router();
actorRouter.get('/', controller.getActors);
actorRouter.get('/:id', controller.getActorByID);

const categoryRouter: Router = express.Router();
categoryRouter.get('/', controller.getCategories);
categoryRouter.get('/:id', controller.getCategoryByID);

router.get('/', controller.getIndex);
router.use('/films', filmRouter);
router.use('/languages', languageRouter);
router.use('/actors', actorRouter);
router.use('/categories', categoryRouter);

export default router;
