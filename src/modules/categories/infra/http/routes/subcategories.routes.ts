import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SubcategoriesController from '@modules/categories/infra/http/controllers/SubcategoriesController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const subcategoriesRouter = Router();
const subcategoriesController = new SubcategoriesController();

subcategoriesRouter.use(ensureAuthenticated);
subcategoriesRouter.get(
  '/:category_id',
  celebrate({
    [Segments.PARAMS]: {
      category_id: Joi.string().uuid().required(),
    },
  }),
  subcategoriesController.index,
);

export default subcategoriesRouter;
