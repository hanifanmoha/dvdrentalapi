import express, { Router, Request, Response } from 'express';

const indexRouter: Router = express.Router();

indexRouter.get('/', (req: Request, res: Response) => {
  res.send('DVD Rental API');
});

export default indexRouter;
