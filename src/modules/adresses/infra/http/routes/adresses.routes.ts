import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import AdressesController from '@modules/adresses/infra/http/controllers/AdressesController';

const adressesRouter = Router();
const adressesController = new AdressesController();

adressesRouter.use(ensureAuthenticated);
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
