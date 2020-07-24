import { Repository, getRepository } from 'typeorm';

import Adresses from '@modules/adresses/infra/typeorm/entities/Adress';
import IAdressesRepository from '@modules/adresses/repositories/IAdressesRepository';

export default class AdressesRepository implements IAdressesRepository {
  private ormRepository: Repository<Adresses>;

  constructor() {
    this.ormRepository = getRepository(Adresses);
  }

  public async findAll(): Promise<Adresses[] | undefined> {
    return this.ormRepository.find();
  }
}
