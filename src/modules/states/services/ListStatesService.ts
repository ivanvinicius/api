import { injectable, inject } from 'tsyringe';

import State from '@modules/states/infra/typeorm/entities/State';
import IStatesRepository from '@modules/states/repositories/IStatesRepository';

@injectable()
export default class ListStatesService {
  constructor(
    @inject('StatesRepository')
    private statesRepository: IStatesRepository,
  ) {}

  public async execute(): Promise<State[] | undefined> {
    return this.statesRepository.findAll();
  }
}
