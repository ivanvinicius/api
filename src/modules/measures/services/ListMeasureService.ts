import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Measure from '../infra/typeorm/entities/Measure';
import IMeasuresRepository from '../repositories/IMeasuresRepository';

@injectable()
export default class ListMeasureService {
  constructor(
    @inject('MeasuresRepository')
    private measuresRepository: IMeasuresRepository,
  ) {}

  public async execute(): Promise<Measure[] | undefined> {
    const measures = await this.measuresRepository.findAll();

    if (!measures) {
      throw new AppError('Measure does not exists.');
    }

    return measures;
  }
}
