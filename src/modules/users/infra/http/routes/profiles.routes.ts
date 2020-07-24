import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import ProfilesController from '@modules/users/infra/http/controllers/ProfilesController';

const profilesRouter = Router();
const profilesController = new ProfilesController();

profilesRouter.use(ensureAuthenticated);
profilesRouter.get('/', profilesController.show);

export default profilesRouter;
