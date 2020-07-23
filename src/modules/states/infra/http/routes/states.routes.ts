import { Router } from 'express';

import StatesController from '@modules/states/infra/http/controllers/StatesController';

const statesRouter = Router();
const statesController = new StatesController();

statesRouter.get('/', statesController.index);

export default statesRouter;
