import express from 'express';
import { endpointMap } from './endpointMap'
import { asyncWrapper } from '../helpers/asyncWrapper'
import { NextFunction, Request, Response } from 'express';

const router = express.Router();

Object.entries(endpointMap)
  .map(([endpoint, handlers]) => router.use(endpoint, asyncWrapper(handlers)))

export default router;