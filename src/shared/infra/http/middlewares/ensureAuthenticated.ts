import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { iat, exp, sub } = decoded as ITokenPayload;

    console.log(decoded);
    console.log(iat);
    console.log(exp);
    console.log(sub);

    request.user = { id: sub };

    return next();
  } catch (err) {
    throw new AppError('Invalid JWT Token', 401);
  }
}
