import { Request, Response } from 'express';
import { getUserInfo } from '../../fixtures';

/**
 * Returns the mock user information which includes their teams
 */
export const getUserTeams = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json(getUserInfo(req, res));
};
