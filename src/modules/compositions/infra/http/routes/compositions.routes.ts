import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import ensureIsProvider from '@shared/infra/http/middlewares/ensureIsProvider';

import CompositionsController from '@modules/compositions/infra/http/controllers/CompositionsController';
import ProvidersCompositionsController from '@modules/compositions/infra/http/controllers/ProvidersCompositionsController';

const compositionsRouter = Router();
const compositionsController = new CompositionsController();
const providersCompositionsController = new ProvidersCompositionsController();

compositionsRouter.use(ensureAuthenticated);
compositionsRouter.use(ensureIsProvider);

compositionsRouter.post('/', compositionsController.create);

compositionsRouter.get('/', providersCompositionsController.index);

export default compositionsRouter;
