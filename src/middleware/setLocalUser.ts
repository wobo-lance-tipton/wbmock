import { IUser } from '../types/auth.types';
import { NextFunction, Request, Response } from 'express';
import { parseUserFromCookie } from '../helpers/authHelper';
import { getUserId } from '../fixtures';

export const setLocalUser =  (req:Request, res: Response, next: NextFunction): void => {
  let user: IUser = { id: getUserId(req, res) }
  try {
    user = parseUserFromCookie(req)
  }
  catch(err){}

  res.locals.user = user

  next()
}