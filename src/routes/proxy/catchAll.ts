import { Request, Response } from 'express';
import { getUserInfo } from '../../fixtures';

export const catchAll = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json(getUserInfo(req, res));
};
