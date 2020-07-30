import { Repository, getRepository } from 'typeorm';

import ISeasonsRepository from '@modules/seasons/repositories/ISeasonsRepository';
import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import Season from '../entities/Season';

export default class SeasonsRepository implements ISeasonsRepository {
  private ormRepository: Repository<Season>;

  constructor() {
    this.ormRepository = getRepository(Season);
  }

  public async findById(id: string): Promise<Season | undefined> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async findAllByUser(user_id: string): Promise<Season[] | undefined> {
    return this.ormRepository.find({ where: { user_id } });
  }

  public async delete(id: string): Promise<IDeleteDTO> {
    return this.ormRepository.delete(id);
  }
}
