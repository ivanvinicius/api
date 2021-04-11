import CreateBudgetsService from '@modules/budgets/services/CreateBudgetService';
import ListBudgetsService from '@modules/budgets/services/ListBudgetsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class BudgetsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBudgets = container.resolve(ListBudgetsService);

    const budgets = await listBudgets.execute();

    return response.json(budgets);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, area_id, season_id, items } = request.body;

    const createBudget = container.resolve(CreateBudgetsService);

    const budgets = await createBudget.execute({
      user_id,
      provider_id,
      area_id,
      season_id,
      items,
    });

    return response.json(budgets);
  }
}
