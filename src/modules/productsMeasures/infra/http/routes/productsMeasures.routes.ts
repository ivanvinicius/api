import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import ensureIsProvider from '@shared/infra/http/middlewares/ensureIsProvider';
import ProductsMeasuresController from '../controllers/ProductsMeasuresController';
import ProviderProductsMeasuresController from '../controllers/ProviderProductsMeasuresController';

const productsMeasuresRouter = Router();
const productsMeasuresController = new ProductsMeasuresController();
const providerProductsMeasuresController = new ProviderProductsMeasuresController();

productsMeasuresRouter.use(ensureAuthenticated);
productsMeasuresRouter.use(ensureIsProvider);

productsMeasuresRouter.get('/', providerProductsMeasuresController.index);

productsMeasuresRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      product_id: Joi.string().required(),
      measure_id: Joi.string().required(),
      volume: Joi.string().required(),
      price: Joi.string().required(),
    },
  }),
  productsMeasuresController.create,
);

productsMeasuresRouter.patch(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      product_id: Joi.string().required(),
      measure_id: Joi.string().required(),
      volume: Joi.string().required(),
      price: Joi.string().required(),
    },
  }),
  productsMeasuresController.update,
);

productsMeasuresRouter.delete(
  '/',
  // celebrate({
  //   [Segments.BODY]: {
  //     ids: Joi.object().required(),
  //   },
  // }),
  productsMeasuresController.delete,
);

export default productsMeasuresRouter;
