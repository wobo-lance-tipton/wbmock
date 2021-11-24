import { Request, Response } from 'express';
import { getTimePeriods } from '../../fixtures';

export const goalOkr = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({ filterComp: getTimePeriods(req, res) })
}