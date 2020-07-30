import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListUserAreaService from '@modules/areas/services/ListUserAreaService';

export default class UsersAreasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUserAreas = container.resolve(ListUserAreaService);

    const userAreas = await listUserAreas.execute(request.user.id);

    return response.json(userAreas);
  }
}
