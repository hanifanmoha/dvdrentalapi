import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import router from './router';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', router);

export default app;
