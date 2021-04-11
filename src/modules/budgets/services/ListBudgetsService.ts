import { inject, injectable } from 'tsyringe';

import Budget from '../infra/typeorm/entities/Budget';
import IBudgetsRepository from '../repositories/IBudgetsRepository';

@injectable()
export default class ListBudgetsService {
  constructor(
    @inject('BudgetsRepository')
    private budgetsRepository: IBudgetsRepository,
  ) {}

  public async execute(): Promise<Budget[] | undefined> {
    return this.budgetsRepository.findAll();
  }
}
