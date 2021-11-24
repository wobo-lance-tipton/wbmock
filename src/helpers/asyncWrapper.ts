import asyncHandler from 'express-async-handler';

export const asyncWrapper = (handlers: Array<Function>): Array<Function> => {
  return handlers.map((handler) => asyncHandler((...args) => handler(...args)));
};
