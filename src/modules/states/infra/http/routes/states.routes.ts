import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import StateRepository from '../repositories/StatesRepository';

const statesRouter = Router();

statesRouter.get('/', async (request, response) => {
  const stateRepository = getCustomRepository(StateRepository);

  const states = await stateRepository.find();

  return response.json(states);
});

export default statesRouter;
