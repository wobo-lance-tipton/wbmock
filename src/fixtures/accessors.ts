import { token } from './token';
import { user, userInfo } from './user';
import { teams, teamGoals } from './teams';
import { timePeriods } from './timePeriods';
import { Request, Response } from 'express';
import { orgFeatureFlags } from './organization';

/**
 * Gets the access token relative to the user
 * Eventually this should be tied to a specific user
 */
// eslint-disable-next-line
export const getAccessToken = (req: Request, res: Response): string => {
  return token.access_token;
};

/**
 * Gets the access token relative to the user
 * Eventually this should be tied to a specific user
 */
// eslint-disable-next-line
export const getCode = (req: Request, res: Response): string => {
  return token.code;
};

/**
 * Gets the user id based on the current request
 * Enventually update to by dyamic
 */
// eslint-disable-next-line
export const getUserId = (req: Request, res: Response): string => {
  return user.user_id;
};

/**
 * Gets an entire user object based on the current request
 */
// eslint-disable-next-line
export const getUserInfo = (req: Request, res: Response) => {
  return userInfo;
};

/**
 * Gets the goal time-periods based on the current request
 */
// eslint-disable-next-line
export const getTimePeriods = (req: Request, res: Response) => {
  return timePeriods;
};

/**
 * Gets the team and members  based on the current request and user
 */
// eslint-disable-next-line
export const getTeams = (req: Request, res: Response) => {
  return teams;
};

/**
 * Gets the team goals  based on the current request and user
 */
// eslint-disable-next-line
export const getTeamGoals = (req: Request, res: Response) => {
  return teamGoals;
};

/**
 * Mock helper to get the feature flags for a mock organization
 */
// eslint-disable-next-line
 export const getFeatureFlags = (req: Request, res: Response) => {
  return orgFeatureFlags
};