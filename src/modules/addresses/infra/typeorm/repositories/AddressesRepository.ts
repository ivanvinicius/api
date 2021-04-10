import { getRepository, Repository } from 'typeorm';

import IAddressesRepository from '@modules/addresses/repositories/IAddressesRepository';
import Address from '../entities/Address';

export default class AddressesRepository implements IAddressesRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async findAll(): Promise<Address[] | undefined> {
    return this.ormRepository.find();
  }
}
