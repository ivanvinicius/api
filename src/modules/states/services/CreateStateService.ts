import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import State from '@modules/states/infra/typeorm/entities/State';

import IStatesRepository from '@modules/states/repositories/IStateRepository';

@injectable()
class CreateStateService {
  constructor(
    @inject('StateRepository')
    private statesRepository: IStatesRepository,
  ) {}
}

export default CreateStateService;
