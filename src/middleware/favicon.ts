import { NextFunction, Request, Response } from 'express';

/**
 * Handles requests for the favicon durring the auth processes
 */
export const handleFavicon = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  return req.originalUrl.includes('favicon.ico')
    ? res.status(204).end()
    : next();
};
