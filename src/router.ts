import express, { Router } from 'express';
import * as controller from './controller';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

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

router.get('/mocked', async function (req, res) {
  const mongod = await MongoMemoryServer.create();
  const conn = await mongoose
    .connect(mongod.getUri(), {})
    .then(() => console.log('MongoDB connected'))
    .catch((err: any) => console.log(err));
  console.log(mongod.getUri());

  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const User = mongoose.model('User', userSchema);

  const newUser = new User({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123',
  });

  await newUser
    .save()
    .then(() => console.log('User created'))
    .catch((err: any) => console.log(err));

  const users = await User.find();
  console.log(users);

  res.send(users);
});

export default router;
