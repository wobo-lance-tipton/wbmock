import { getCode } from '../fixtures';
import { Request, Response } from 'express';

/**
 * Handles the inital authorization endpoint redirecting back to the passed in redirect_uri
 */
export const authorizeEndpoint = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { redirect_uri, state } = req.query;
  res.redirect(`${redirect_uri}?state=${state}&code=${getCode(req, res)}`);
};
