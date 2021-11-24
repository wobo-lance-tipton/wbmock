import express from 'express';
import { endpointMap } from './endpointMap';
import { asyncWrapper } from '../helpers/asyncWrapper';

const router = express.Router();

Object.entries(endpointMap).map(([endpoint, handlers]) =>
  router.use(endpoint, asyncWrapper(handlers)),
);

export default router;
