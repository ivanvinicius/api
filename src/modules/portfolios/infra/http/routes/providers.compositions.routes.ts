import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import ProvidersCompositionsController from '../controllers/ProvidersCompositionsController';

const providersCompositionsRouter = Router();
const providersCompositionsController = new ProvidersCompositionsController();

providersCompositionsRouter.use(ensureAuthenticated);

providersCompositionsRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      culture_id: Joi.string().required(),
      productivity: Joi.number().required(),
    },
  }),
  providersCompositionsController.index,
);

providersCompositionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      culture_id: Joi.string().required(),
      productivity: Joi.number().required(),
      items: Joi.array().required(),
    },
  }),

  providersCompositionsController.create,
);

providersCompositionsRouter.delete(
  '/',
  celebrate({
    [Segments.QUERY]: {
      culture_id: Joi.string().required(),
      productivity: Joi.number().required(),
    },
  }),
  providersCompositionsController.delete,
);

export default providersCompositionsRouter;
