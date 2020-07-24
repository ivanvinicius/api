import { Router } from 'express';

import CategoriesController from '@modules/categories/infra/http/controllers/CategoriesController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const categoriesRouter = Router();
const categoriesController = new CategoriesController();

categoriesRouter.use(ensureAuthenticated);
categoriesRouter.get('/', categoriesController.index);

export default categoriesRouter;
