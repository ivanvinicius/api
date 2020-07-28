import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import ensureIsProvider from '@shared/infra/http/middlewares/ensureIsProvider';
import ProductsMeasuresController from '../controllers/ProductsMeasuresController';

const productsMeasuresRouter = Router();
const productsMeasuresController = new ProductsMeasuresController();

productsMeasuresRouter.use(ensureAuthenticated);
productsMeasuresRouter.use(ensureIsProvider);

productsMeasuresRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      product_id: Joi.string().required(),
      brand_id: Joi.string().required(),
      measure_id: Joi.string().required(),
      volume: Joi.number().required(),
      price: Joi.number().required(),
    },
  }),
  productsMeasuresController.create,
);

productsMeasuresRouter.patch(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      brand_id: Joi.string().required(),
      measure_id: Joi.string().required(),
      volume: Joi.number().required(),
      price: Joi.number().required(),
    },
  }),
  productsMeasuresController.update,
);

productsMeasuresRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  productsMeasuresController.delete,
);

export default productsMeasuresRouter;
