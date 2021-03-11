import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderCompositionService from '../../../services/ListProviderCompositionService';

export default class ProvidersCompositionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProviderCompositions = container.resolve(
      ListProviderCompositionService,
    );

    const compositions = await listProviderCompositions.execute(
      request.user.id,
    );

    return response.json(compositions);
  }
}
