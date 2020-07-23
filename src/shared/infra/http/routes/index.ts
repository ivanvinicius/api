import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import statesRouter from '@modules/states/infra/http/routes/states.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/states', statesRouter);

export default routes;
