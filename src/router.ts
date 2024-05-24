import express, { Router } from 'express';
import * as controller from './controller';
import { Sequelize, DataTypes } from 'sequelize';

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

const storeRouter: Router = express.Router();
storeRouter.get('/', controller.getStores);
storeRouter.get('/:id', controller.getStoreByID);

const staffRouter: Router = express.Router();
staffRouter.get('/', controller.getStaff);
staffRouter.get('/:id', controller.getStaffByID);

router.get('/', controller.getIndex);
router.use('/films', filmRouter);
router.use('/languages', languageRouter);
router.use('/actors', actorRouter);
router.use('/categories', categoryRouter);
router.use('/customers', customerRouter);
router.use('/stores', storeRouter);
router.use('/staff', staffRouter);

const sequelize = new Sequelize('sqlite::memory:');
const Test = sequelize.define('Test', {
  x: DataTypes.NUMBER,
});

async function init() {
  await sequelize.sync({ force: true });
  console.log('Database & tables created!');
}

init();

router.get('/mocked', async function (req, res) {
  await Test.create({ x: Math.random() });
  const numbers = await Test.findAll();
  res.send(numbers);
});

export default router;
