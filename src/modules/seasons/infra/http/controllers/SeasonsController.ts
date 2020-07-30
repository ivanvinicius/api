import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteSeasonService from '@modules/seasons/services/DeleteSeasonService';

export default class SeasonsController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteSeason = container.resolve(DeleteSeasonService);

    await deleteSeason.execute(id);

    return response.status(200).json();
  }
}
