import { Router } from 'express';

import statesRouter from './states.routes';

const routes = Router();

routes.use('/states', statesRouter);

export default routes;
