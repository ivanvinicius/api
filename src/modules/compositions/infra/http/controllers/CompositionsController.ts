import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCompositionService from '../../../services/CreateCompositionService';

export default class CompositionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id: provider_id } = request.user;
    const { culture_id, productivity, products_measures } = request.body;

    const createComposition = container.resolve(CreateCompositionService);

    const composition = await createComposition.execute({
      provider_id,
      culture_id,
      productivity,
      products_measures,
    });

    return response.json(composition);
  }
}
