import { Router } from 'express';

import clientsRouter from '@modules/users/infra/http/routes/clients.routes';
import providersRouter from '@modules/users/infra/http/routes/providers.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

import statesRouter from '@modules/states/infra/http/routes/states.routes';
import adressesRouter from '@modules/adresses/infra/http/routes/adresses.routes';
import profilesRouter from '@modules/users/infra/http/routes/profiles.routes';
import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';
import subcategoriesRouter from '@modules/subcategories/infra/http/routes/subcategories.routes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import brandsRouter from '@modules/brands/infra/http/routes/brands.routes';
import measuresRouter from '@modules/measures/infra/http/routes/measures.routes';
import culturesRouter from '@modules/cultures/infra/http/routes/cultures.routes';
import productsMeasuresRouter from '@modules/productsMeasures/infra/http/routes/productsMeasures.routes';
import areasRouter from '@modules/areas/infra/http/routes/areas.routes';
import seasonsRouter from '@modules/seasons/infra/http/routes/seasons.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/providers', providersRouter);
routes.use('/sessions', sessionsRouter);

routes.use('/states', statesRouter);
routes.use('/adresses', adressesRouter);
routes.use('/profiles', profilesRouter);
routes.use('/categories', categoriesRouter);
routes.use('/subcategories', subcategoriesRouter);
routes.use('/products', productsRouter);
routes.use('/brands', brandsRouter);
routes.use('/measures', measuresRouter);
routes.use('/cultures', culturesRouter);
routes.use('/productsMeasures', productsMeasuresRouter);
routes.use('/areas', areasRouter);
routes.use('/seasons', seasonsRouter);

export default routes;
