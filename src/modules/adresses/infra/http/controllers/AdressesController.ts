import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAdressesService from '@modules/adresses/services/ListAdressesService';

export default class AdressesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { state_id } = request.body;

    const listAdresses = container.resolve(ListAdressesService);

    const adresses = await listAdresses.execute({ state_id });

    return response.json(adresses);
  }
}
