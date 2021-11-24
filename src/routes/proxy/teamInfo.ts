import { getTeams } from '../../fixtures';
import { Request, Response } from 'express';

export const teamInfo = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json(getTeams(req, res))
}