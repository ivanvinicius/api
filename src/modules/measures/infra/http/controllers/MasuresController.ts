import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListMeasureService from '@modules/measures/services/ListMeasureService';

export default class MeasuresController {
  public async index(request: Request, response: Response): Promise<Response> {
    const type = Number(request.params.type);

    const listMeasures = container.resolve(ListMeasureService);

    const measures = await listMeasures.execute({ type });

    return response.json(measures);
  }
}
