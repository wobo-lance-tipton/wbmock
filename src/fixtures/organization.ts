import { Request, Response } from 'express';

/**
 * Mock helper to get the feature flags for a mock organization
 */
export const getFeatureFlags = (req: Request, res: Response) => {
  return {
    okrCanvasEnabled: true,
  }
} 