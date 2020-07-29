import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import SubcategoriesController from '../controllers/SubcategoriesController';

const subcategoriesRouter = Router();
const subcategoriesController = new SubcategoriesController();

subcategoriesRouter.use(ensureAuthenticated);
subcategoriesRouter.get('/:category_id', subcategoriesController.index);

export default subcategoriesRouter;
