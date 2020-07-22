import { Router } from 'express';

import StateController from '@modules/states/infra/http/controllers/StateController';

const statesRouter = Router();
const stateController = new StateController();

statesRouter.post('/', stateController.create);

export default statesRouter;
