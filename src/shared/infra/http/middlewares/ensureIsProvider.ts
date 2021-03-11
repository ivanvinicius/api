import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';

export default function ensureIsProvider(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  if (!request.user.provider) {
    throw new AppError(
      'Only providers can create/update/read information in this area',
    );
  }

  return next();
}
