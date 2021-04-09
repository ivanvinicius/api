import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { differenceInMonths, isBefore } from 'date-fns';

import Season from '../infra/typeorm/entities/Season';
import ISeasonsRepository from '../repositories/ISeasonsRepository';

interface IRequest {
  id: string;
  name: string;
  description?: string;
  start_at: Date;
  end_at: Date;
}
@injectable()
export default class UpdateSeasonService {
  constructor(
    @inject('SeasonsRepository')
    private seasonsRepository: ISeasonsRepository,
  ) {}

  public async execute({
    id,
    name,
    description,
    start_at,
    end_at,
  }: IRequest): Promise<Season | undefined> {
    const season = await this.seasonsRepository.findById(id);

    if (!season) {
      throw new AppError('A temporda informada não foi encontrada.', 400);
    }

    if (isBefore(start_at, new Date(Date.now()))) {
      throw new AppError(
        'A data de início deve ser maior que a data atual.',
        400,
      );
    }

    if (differenceInMonths(end_at, start_at) < 1) {
      throw new AppError(
        'A temporada não pode conter duração menor que um mês.',
        400,
      );
    }

    if (differenceInMonths(end_at, start_at) > 12) {
      throw new AppError('A temporada não pode ser maior que um ano.', 400);
    }

    Object.assign(season, { name, description, start_at, end_at });

    return this.seasonsRepository.update(season);
  }
}
