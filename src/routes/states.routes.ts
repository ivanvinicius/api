import {Router } from 'express';

const statesRouter = Router();

statesRouter.get('/', async(request, response) => {
  return response.send('states');
});

export default statesRouter;
