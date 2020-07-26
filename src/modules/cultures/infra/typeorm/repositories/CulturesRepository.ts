import { Repository, getRepository } from 'typeorm';

import ICulturesRepository from '@modules/cultures/repositories/ICulturesRepository';
import Culture from '../entities/Culture';

export default class CulturesRepository implements ICulturesRepository {
  private ormRepository: Repository<Culture>;

  constructor() {
    this.ormRepository = getRepository(Culture);
  }

  public async findAll(): Promise<Culture[] | undefined> {
    return this.ormRepository.find();
  }
}
