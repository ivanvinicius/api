import ICreateBudgetDTO from '@modules/budgets/dtos/ICreateBudgetDTO';
import IFindBudgetAvoidDuplicateDTO from '@modules/budgets/dtos/IFindBudgetAvoidDuplicateDTO';
import IBudgetsRepository from '@modules/budgets/repositories/IBudgetsRepository';
import { getRepository, Repository } from 'typeorm';
import Budget from '../entities/Budget';

export default class BudgetsRepository implements IBudgetsRepository {
  private ormRepository: Repository<Budget>;

  constructor() {
    this.ormRepository = getRepository(Budget);
  }

  public async findAll(): Promise<Budget[] | undefined> {
    return this.ormRepository.find();
  }

  public async findBudgetAvoidDuplicate({
    area_id,
    season_id,
    portfolio_id,
  }: IFindBudgetAvoidDuplicateDTO): Promise<Budget | undefined> {
    return this.ormRepository.findOne({
      where: { area_id, season_id, portfolio_id },
    });
  }

  public async create(data: ICreateBudgetDTO[]): Promise<Budget[] | undefined> {
    const budgets = this.ormRepository.create(data);

    await this.ormRepository.save(budgets);

    return budgets;
  }
}
