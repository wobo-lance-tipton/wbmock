import { Request, Response } from 'express';
import { getTeamGoals } from '../../fixtures';

/**
 * Returns the mock user information which includes their teams
 */
export const teamGoals = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json(getTeamGoals(req, res));
};
