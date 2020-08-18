import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CitiesController from '@modules/cities/infra/http/controllers/CitiesController';

const adressesRouter = Router();
const citiesController = new CitiesController();

adressesRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      state_id: Joi.string().required(),
    },
  }),
  citiesController.index,
);

export default adressesRouter;
