import config from '../config';
import { Base64 } from 'js-base64';
import { cookies } from '../constants';
import { ICookieData } from '../types/auth.types'
import { NextFunction, Request, Response } from 'express';

/**
 * Sets the same cookies as are added in the sentinel service
 * Pulls the user id from the request, and adds it to the cookie
 * 
 */
export const setCookies = (req: Request, res: Response, next: NextFunction) => {
  const cookieData: ICookieData = {
    id: <string>req.query.userId,
    exp: Math.floor((Date.now() + config.wobo.cookieOptions.maxAge) / 1000),
  };

  res.cookie(cookies.auth, Base64.encode(JSON.stringify(cookieData)), {
    httpOnly: true,
    signed: true,
    ...config.wobo.cookieOptions,
  });

  res.cookie(cookies.authIndicator, Base64.encode('true'), {
    signed: true,
    ...config.wobo.cookieOptions,
  });

  return next()
}




