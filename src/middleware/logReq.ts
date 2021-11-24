import { log } from '../helpers/logger';
import { NextFunction, Request, Response } from 'express';

export const logReq = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  let logStr = `[ WOBO-MOCK REQ ] Route - ${req.path}`;
  logStr += req.query.action ? ` | Action - ${req.query.action}` : ``;

  log.log(logStr);

  next();
};
