import { Request } from 'express';
import { Base64 } from 'js-base64';
import { cookies } from '../constants';
import { IUser, ICookieData } from '../types/auth.types';

export const parseUserFromCookie = (req: Request): IUser => {
  const cookieValue = req.signedCookies[cookies.auth];
  if (!cookieValue) throw new Error(`Missing cookie value`);

  const cookieData: ICookieData = JSON.parse(
    Base64.decode(cookieValue),
  ) as ICookieData;
  if (!cookieData) throw new Error(`Missing cookie data`);

  return { id: cookieData.id };
};
