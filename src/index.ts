import express, { Application, Request, Response, NextFunction } from 'express';

// Boot express
const app: Application = express();
const port = 5000;

// Application routing
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).send({ data: 'Hello from Ornio AS' });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
