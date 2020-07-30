import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { parseISO, getYear } from 'date-fns';

import DeleteSeasonService from '@modules/seasons/services/DeleteSeasonService';
import CreateSeasonService from '@modules/seasons/services/CreateSeasonService';

export default class SeasonsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, start_on, end_on } = request.body;

    const startOnParsed = parseISO(start_on);
    const endOnParsed = parseISO(end_on);
    const parsedName = `${name} ${getYear(startOnParsed)}/${getYear(
      endOnParsed,
    )}`;

    const createSeason = container.resolve(CreateSeasonService);

    const season = await createSeason.execute({
      user_id: request.user.id,
      name: parsedName,
      start_on: startOnParsed,
      end_on: endOnParsed,
    });

    return response.json(season);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteSeason = container.resolve(DeleteSeasonService);

    await deleteSeason.execute(id);

    return response.status(200).json();
  }
}
