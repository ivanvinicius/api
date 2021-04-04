import { Router } from 'express';

import AddressesController from '../controllers/AddressesController';

const addressesRouter = Router();
const addressesController = new AddressesController();

addressesRouter.get('/', addressesController.index);

export default addressesRouter;
