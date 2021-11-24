import cors from 'cors';
import multer from 'multer';
import routes from './routes';
import config from './config/config';
import cookieParser from 'cookie-parser';
import { logReq } from './middleware/logReq';
import express, { Application } from 'express';

export const app: Application = express();

app.disable('x-powered-by');
app.use(
  cors({
    origin: config.wobo.cors.allowOrigin,
    credentials: true,
  }),
);
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser(config.canvas.sharedSecret));
app.use(logReq);
app.use(routes);
