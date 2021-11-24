import { IUser } from '../types/auth.types';
import { NextFunction, Request, Response } from 'express';
import { parseUserFromCookie } from '../helpers/authHelper';
import { getUserId } from '../fixtures';

export const setLocalUser = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  let user: IUser;
  try {
    user = parseUserFromCookie(req);
  } catch (err) {
    user = { id: getUserId(req, res) };
  }

  res.locals.user = user;

  next();
};
