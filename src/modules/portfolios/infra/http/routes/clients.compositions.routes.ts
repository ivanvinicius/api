import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const clientsCompositionsRouter = Router();

clientsCompositionsRouter.use(ensureAuthenticated);
clientsCompositionsRouter.get('/', () => ({}));

export default clientsCompositionsRouter;
