import { Router } from 'express';

import clientsRouter from '@modules/users/infra/http/routes/clients.routes';
import providersRouter from '@modules/users/infra/http/routes/providers.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import statesRouter from '@modules/states/infra/http/routes/states.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/providers', providersRouter);
routes.use('/sessions', sessionsRouter);

routes.use('/states', statesRouter);

export default routes;
