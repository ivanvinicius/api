import { inject, injectable } from 'tsyringe';

import Adresses from '@modules/adresses/infra/typeorm/entities/Adress';
import IAdressesRepository from '@modules/adresses/repositories/IAdressesRepository';

@injectable()
export default class ListAdressesService {
  constructor(
    @inject('AdressesRepository')
    private adressesRepository: IAdressesRepository,
  ) {}

  public async execute(): Promise<Adresses[] | undefined> {
    return this.adressesRepository.findAll();
  }
}
