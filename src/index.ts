import express from 'express';
import type { Application, Request, Response, NextFunction } from 'express';
import { APP_PORT } from '#/constants/app.constants';
import dotenv from 'dotenv';

dotenv.config();

// Boot express
const app: Application = express();

// Application routing
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).send({ data: 'Hello from Suman Project' });
});

// Start server
app.listen(APP_PORT, () => {
  console.log(`Express is listening at http://localhost:${APP_PORT as string}`);
});
