import { inject, injectable } from 'tsyringe';

import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import AppError from '@shared/errors/AppError';
import ISeasonsRepository from '../repositories/ISeasonsRepository';

@injectable()
export default class DeleteSeasonService {
  constructor(
    @inject('SeasonsRepository')
    private seasonsRepository: ISeasonsRepository,
  ) {}

  public async execute(id: string): Promise<IDeleteDTO> {
    const checkSeasonsExists = await this.seasonsRepository.findById(id);

    if (!checkSeasonsExists) {
      throw new AppError('Seasons does not exists.');
    }

    const deletedSeason = await this.seasonsRepository.delete(id);

    if (deletedSeason.affected === 0) {
      throw new AppError('Unable to delete this item.');
    }

    return deletedSeason;
  }
}
