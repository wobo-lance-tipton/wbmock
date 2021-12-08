import { Request, Response } from 'express';
import { getFeatureFlags } from '../../fixtures';

/**
 * Returns the mock feature flags for an organization
 */
export const orgFeatureFlags = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json(getFeatureFlags(req, res));
};
