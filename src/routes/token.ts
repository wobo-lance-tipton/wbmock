import { Request, Response } from 'express';
import { getAccessToken } from '../fixtures';

/**
 * Token endpoint to get the token from wobo api
 */
export const tokenEndpoint = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    success: true,
    access_token: getAccessToken(req, res)
  });
}