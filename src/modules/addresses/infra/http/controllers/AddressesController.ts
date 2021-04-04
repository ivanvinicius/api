import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAddressesService from '@modules/addresses/services/ListAddressesService';

export default class AddressesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAddresses = container.resolve(ListAddressesService);

    const addresses = await listAddresses.execute();

    return response.json(addresses);
  }
}
