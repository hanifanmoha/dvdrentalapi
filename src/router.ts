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

const customerRouter: Router = express.Router();
customerRouter.get('/', controller.getCustomers);
customerRouter.get('/:id', controller.getCustomerByID);
customerRouter.get('/:id/rentals', controller.getCustomerRental);

const storeRouter: Router = express.Router();
storeRouter.get('/', controller.getStores);
storeRouter.get('/:id', controller.getStoreByID);

const staffRouter: Router = express.Router();
staffRouter.get('/', controller.getStaff);
staffRouter.get('/:id', controller.getStaffByID);

const rentalRouter: Router = express.Router();
rentalRouter.get('/:id', controller.getRentalByID);

router.get('/', controller.getIndex);
router.use('/films', filmRouter);
router.use('/languages', languageRouter);
router.use('/actors', actorRouter);
router.use('/categories', categoryRouter);
router.use('/customers', customerRouter);
router.use('/stores', storeRouter);
router.use('/staff', staffRouter);
router.use('/rentals', rentalRouter);

export default router;
