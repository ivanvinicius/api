import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import UsersAreasController from '../controllers/UsersAreasController';
import AreasController from '../controllers/AreasController';

const areasRouter = Router();
const areasController = new AreasController();
const usersAreasController = new UsersAreasController();

areasRouter.use(ensureAuthenticated);

areasRouter.get('/', usersAreasController.index);

areasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      measure_id: Joi.string().required(),
      name: Joi.string().required(),
      size: Joi.string().required(),
    },
  }),
  areasController.create,
);

areasRouter.patch(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      measure_id: Joi.string().required(),
      name: Joi.string().required(),
      size: Joi.string().required(),
    },
  }),
  areasController.update,
);

areasRouter.delete('/:id', areasController.delete);

export default areasRouter;
