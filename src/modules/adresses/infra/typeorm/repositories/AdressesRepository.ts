import { Repository, getRepository } from 'typeorm';
import { classToClass } from 'class-transformer';

import Adresses from '@modules/adresses/infra/typeorm/entities/Adress';
import IAdressesRepository from '@modules/adresses/repositories/IAdressesRepository';

export default class AdressesRepository implements IAdressesRepository {
  private ormRepository: Repository<Adresses>;

  constructor() {
    this.ormRepository = getRepository(Adresses);
  }

  public async findAllByState(
    state_id: string,
  ): Promise<Adresses[] | undefined> {
    const adresses = await this.ormRepository.find({
      where: { state_id },
      join: {
        alias: 'adress',
        innerJoinAndSelect: {
          state: 'adress.state',
        },
      },
    });

    return classToClass(adresses);
  }
}
