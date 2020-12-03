import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import MeasuresController from '../controllers/MasuresController';

const measuresRouter = Router();
const measuresController = new MeasuresController();

measuresRouter.use(ensureAuthenticated);
measuresRouter.get('/:type', measuresController.index);

export default measuresRouter;
