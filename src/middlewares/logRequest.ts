import { Request, Response, NextFunction } from 'express';

export default function logRequest(
  request: Request,
  response: Response,
  next: NextFunction,
): string | void {
  const { method, url } = request;

  const log = `[${method.toUpperCase()}] ${url} `;

  /* eslint-disable no-console */
  console.time(log);
  next();
  console.timeEnd(log);
}
