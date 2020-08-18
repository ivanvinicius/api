import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCitiesService from '@modules/cities/services/ListCitiesService';

export default class CitiesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const state_id = String(request.query.state_id);

    if (state_id) {
      const listCities = container.resolve(ListCitiesService);

      const cities = await listCities.execute({ state_id });

      return response.json(cities);
    }

    return response.status(400).json();
  }
}
