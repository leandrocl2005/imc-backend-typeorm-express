import "reflect-metadata";
import { Router } from 'express';
import imcRouter from './imc.routes';

const routes = Router();

routes.use('/imcs', imcRouter);

export default routes;