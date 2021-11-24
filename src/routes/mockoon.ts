import config from '../config/mockoon'
import { Request, Response } from 'express';

/**
 * Loads the mockoon config from the API endpoint to it can be dynamically generated
 */
export const mockoon = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json(config);
}