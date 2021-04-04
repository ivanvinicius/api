import { getTreeRepository, TreeRepository } from 'typeorm';

import IAddressesRepository from '@modules/addresses/repositories/IAddressesRepository';
import Address from '../entities/Address';

export default class AddressesRepository implements IAddressesRepository {
  private ormRepository: TreeRepository<Address>;

  constructor() {
    this.ormRepository = getTreeRepository(Address);
  }

  public async findAll(): Promise<Address[] | undefined> {
    return this.ormRepository.findTrees();
  }
}
