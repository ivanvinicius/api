import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { differenceInMonths, isBefore } from 'date-fns';

import Season from '../infra/typeorm/entities/Season';
import ISeasonsRepository from '../repositories/ISeasonsRepository';

interface IRequest {
  user_id: string;
  name: string;
  description?: string;
  start_at: Date;
  end_at: Date;
}
@injectable()
export default class CreateSeasonService {
  constructor(
    @inject('SeasonsRepository')
    private seasonsRepository: ISeasonsRepository,
  ) {}

  public async execute({
    user_id,
    name,
    description,
    start_at,
    end_at,
  }: IRequest): Promise<Season | undefined> {
    const seasonExists = await this.seasonsRepository.findSeasonByNameAndUser({
      name,
      user_id,
    });

    if (seasonExists) {
      throw new AppError('The season name was already used by you.', 400);
    }

    if (isBefore(start_at, new Date(Date.now()))) {
      throw new AppError("The 'start' date must be greater than today.");
    }

    if (differenceInMonths(end_at, start_at) < 1) {
      throw new AppError('The season must be longer than a month.');
    }

    if (differenceInMonths(end_at, start_at) > 12) {
      throw new AppError('The season can not be longer than a year.');
    }

    const newSeason = await this.seasonsRepository.create({
      user_id,
      name,
      description,
      start_at,
      end_at,
    });

    return newSeason;
  }
}
