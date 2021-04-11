import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProviderCompositionsService from '@modules/portfolios/services/compositions/CreateProviderCompositionService';
import ListProviderCompositionService from '@modules/portfolios/services/compositions/ListProviderCompositionService';
import DeleteProviderCompositionService from '@modules/portfolios/services/compositions/DeleteProviderCompositionService';

export default class ProvidersCompositionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { culture_id, productivity } = request.query;

    const listComposition = container.resolve(ListProviderCompositionService);

    const compositions = await listComposition.execute({
      provider_id,
      culture_id: String(culture_id),
      productivity: Number(productivity),
    });

    return response.json(compositions);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { culture_id, productivity, items } = request.body;

    const createProviderComposition = container.resolve(
      CreateProviderCompositionsService,
    );

    const compositions = await createProviderComposition.execute({
      provider_id,
      culture_id,
      productivity,
      items,
    });

    return response.json(compositions);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { culture_id, productivity } = request.query;

    const deleteComposition = container.resolve(
      DeleteProviderCompositionService,
    );

    const serviceResponse = await deleteComposition.execute({
      provider_id,
      culture_id: String(culture_id),
      productivity: Number(productivity),
    });

    return response.json(serviceResponse);
  }
}
