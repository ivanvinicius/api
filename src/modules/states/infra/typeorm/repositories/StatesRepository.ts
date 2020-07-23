import { Repository, getRepository } from 'typeorm';

import State from '@modules/states/infra/typeorm/entities/State';
import IStatesRepository from '@modules/states/repositories/IStatesRepository';

export default class StatesRepository implements IStatesRepository {
  private ormRepository: Repository<State>;

  constructor() {
    this.ormRepository = getRepository(State);
  }

  public async findAll(): Promise<State[] | undefined> {
    return this.ormRepository.find();
  }
}
