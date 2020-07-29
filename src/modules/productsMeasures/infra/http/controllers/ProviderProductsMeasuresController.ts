import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListProviderProductMeasureService from '@modules/productsMeasures/services/ListProviderProductMeasureService';

export default class ProviderProductsMeasuresController {
  public async index(request: Request, response: Response): Promise<Response> {
    const lisProviderProductsMeasures = container.resolve(
      ListProviderProductMeasureService,
    );

    const providerProductsMeasures = await lisProviderProductsMeasures.execute(
      request.user.id,
    );

    return response.json(providerProductsMeasures);
  }
}
