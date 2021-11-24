import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';

/**
 * Loops over the passed in RequestHandler methods and wraps each one in the asyncHandler
 */
export const asyncWrapper = (
  handlers: Array<RequestHandler>,
): Array<RequestHandler> => {
  return handlers.map(asyncHandler);
};
