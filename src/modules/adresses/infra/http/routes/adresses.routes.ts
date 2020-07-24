import { Router } from 'express';

import AdressesController from '@modules/adresses/infra/http/controllers/AdressesController';

const adressesRouter = Router();
const adressesController = new AdressesController();

adressesRouter.get('/', adressesController.index);

export default adressesRouter;
