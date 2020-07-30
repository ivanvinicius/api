import { Router } from 'express';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import UsersSeasonsController from '../controllers/UsersSeasonsController';
import SeasonsController from '../controllers/SeasonsController';

const seasonsRouter = Router();
const usersSeasonsController = new UsersSeasonsController();
const seasonsController = new SeasonsController();

seasonsRouter.use(ensureAuthenticated);
seasonsRouter.get('/', usersSeasonsController.index);

seasonsRouter.delete('/:id', seasonsController.delete);

export default seasonsRouter;
