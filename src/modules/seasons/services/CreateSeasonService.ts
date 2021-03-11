import { inject, injectable } from 'tsyringe';
import { differenceInMonths, isBefore } from 'date-fns';

import AppError from '@shared/errors/AppError';
import ISeasonsRepository from '../repositories/ISeasonsRepository';
import Season from '../infra/typeorm/entities/Season';

interface IRequest {
  user_id: string;
  name: string;
  start_on: Date;
  end_on: Date;
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
    start_on,
    end_on,
  }: IRequest): Promise<Season> {
    if (differenceInMonths(end_on, start_on) < 1) {
      throw new AppError('The season must be longer than a month.', 400);
    }

    if (differenceInMonths(end_on, start_on) > 12) {
      throw new AppError('The season can not be longer than a year.', 400);
    }

    if (isBefore(start_on, new Date(Date.now()))) {
      throw new AppError("The 'start' date must be greater than today.", 400);
    }

    const checkSeasonNameExists = await this.seasonsRepository.findSeasonByUserAndName(
      { user_id, name },
    );

    if (checkSeasonNameExists) {
      throw new AppError("This season 'name' is already used.", 400);
    }

    return this.seasonsRepository.create({ user_id, name, start_on, end_on });
  }
}
