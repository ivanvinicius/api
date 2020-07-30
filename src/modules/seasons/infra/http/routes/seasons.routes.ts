import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import UsersSeasonsController from '../controllers/UsersSeasonsController';
import SeasonsController from '../controllers/SeasonsController';

const seasonsRouter = Router();
const usersSeasonsController = new UsersSeasonsController();
const seasonsController = new SeasonsController();

seasonsRouter.use(ensureAuthenticated);
seasonsRouter.get('/', usersSeasonsController.index);

seasonsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      start_on: Joi.required(),
      end_on: Joi.required(),
    },
  }),
  seasonsController.create,
);

seasonsRouter.delete('/:id', seasonsController.delete);

export default seasonsRouter;
