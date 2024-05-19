import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { indexRouter, filmRouter } from './router';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/films', filmRouter);

export default app;
