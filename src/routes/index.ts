import {Router} from 'express';

import StatesRouter from './states.routes';

const routes = Router();

routes.use(StatesRouter);

export default routes;
