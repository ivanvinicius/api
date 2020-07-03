import { EntityRepository, Repository } from 'typeorm';

import State from '../models/State';

@EntityRepository(State)
class StateRepository extends Repository<State> {
  public async index(): Promise<State[] | null> {
    const states = await this.find();

    return states || null;
  }
}

export default StateRepository;
