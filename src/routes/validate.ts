import { getUserId } from '../fixtures';
import { Request, Response } from 'express';

/**
 * Validation endpoint to get the users id from wobo api
 */
export const validateEndpoint = async (
  req: Request,
  res: Response,
): Promise<void> => {
  res.status(200).json({
    success: true,
    user_id: getUserId(req, res),
  });
};
