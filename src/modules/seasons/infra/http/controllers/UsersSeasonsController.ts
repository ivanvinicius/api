import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListUserSeasonService from '@modules/seasons/services/ListUserSeasonService';

export default class UsersSeasonsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUserSeason = container.resolve(ListUserSeasonService);

    const userSeasons = await listUserSeason.execute(request.user.id);

    return response.json(userSeasons);
  }
}
