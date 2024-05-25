import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import router from './router';
import path from 'path';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', router);

export default app;
