import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const compositionsRouter = Router();

compositionsRouter.use(ensureAuthenticated);
compositionsRouter.get('/', () => ({}));

export default compositionsRouter;
