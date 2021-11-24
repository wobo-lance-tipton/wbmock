import { token } from './token';
import { teams } from './teams';
import { user, userInfo } from './user';
import { timePeriods } from './timePeriods';
import { Request, Response } from 'express';

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
  return user.id;
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
