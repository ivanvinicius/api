import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListStateService from '@modules/states/services/ListStateService';

export default class StatesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listStates = container.resolve(ListStateService);

    const states = await listStates.execute();

    return response.json(states);
  }
}
