import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import './database';
import logRequest from './middlewares/logRequest';
import routes from './routes';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());
app.use(logRequest);
app.use(routes);
app.use(
  (error: Error, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error.',
    });
  },
);

/* eslint-disable no-console */
app.listen(3333, () => console.log('🚀 Server is running on port:3333'));
