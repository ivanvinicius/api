import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import StatesController from '@modules/states/infra/http/controllers/StatesController';

const statesRouter = Router();
const statesController = new StatesController();

statesRouter.use(ensureAuthenticated);
statesRouter.get('/', statesController.index);

export default statesRouter;
