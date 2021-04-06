import { Router } from 'express';

import clientsRouter from '@modules/users/infra/http/routes/clients.routes';
import providersRouter from '@modules/users/infra/http/routes/providers.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import addressesRouter from '@modules/addresses/infra/http/routes/addresses.routes';

import productsRouter from '@modules/products/infra/http/routes/products.routes';
import brandsRouter from '@modules/brands/infra/http/routes/brands.routes';
import measuresRouter from '@modules/measures/infra/http/routes/measures.routes';
import culturesRouter from '@modules/cultures/infra/http/routes/cultures.routes';
import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';
import areasRouter from '@modules/areas/infra/http/routes/areas.routes';
import seasonsRouter from '@modules/seasons/infra/http/routes/seasons.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/providers', providersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/addresses', addressesRouter);

routes.use('/products', productsRouter);
routes.use('/brands', brandsRouter);
routes.use('/measures', measuresRouter);
routes.use('/cultures', culturesRouter);
routes.use('/areas', areasRouter);
routes.use('/categories', categoriesRouter);
routes.use('/seasons', seasonsRouter);

export default routes;
