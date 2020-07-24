import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import AdressesController from '@modules/adresses/infra/http/controllers/AdressesController';

const adressesRouter = Router();
const adressesController = new AdressesController();

adressesRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      state_id: Joi.string().required(),
    },
  }),
  adressesController.index,
);

export default adressesRouter;
