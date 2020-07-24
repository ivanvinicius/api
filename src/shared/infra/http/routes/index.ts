import { Router } from 'express';

import clientsRouter from '@modules/users/infra/http/routes/clients.routes';
import providersRouter from '@modules/users/infra/http/routes/providers.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

import statesRouter from '@modules/states/infra/http/routes/states.routes';
import adressesRouter from '@modules/adresses/infra/http/routes/adresses.routes';
import profilesRouter from '@modules/users/infra/http/routes/profiles.routes';
import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';
import subcategoriesRouter from '@modules/categories/infra/http/routes/subcategories.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/providers', providersRouter);
routes.use('/sessions', sessionsRouter);

routes.use('/states', statesRouter);
routes.use('/adresses', adressesRouter);
routes.use('/profiles', profilesRouter);
routes.use('/categories', categoriesRouter);
routes.use('/subcategories', subcategoriesRouter);

export default routes;
