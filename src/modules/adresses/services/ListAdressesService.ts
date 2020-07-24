import { inject, injectable } from 'tsyringe';

import Adresses from '@modules/adresses/infra/typeorm/entities/Adress';
import IAdressesRepository from '@modules/adresses/repositories/IAdressesRepository';

interface IRequest {
  state_id: string;
}

@injectable()
export default class ListAdressesService {
  constructor(
    @inject('AdressesRepository')
    private adressesRepository: IAdressesRepository,
  ) {}

  public async execute({
    state_id,
  }: IRequest): Promise<Adresses[] | undefined> {
    return this.adressesRepository.findAllByState(state_id);
  }
}
