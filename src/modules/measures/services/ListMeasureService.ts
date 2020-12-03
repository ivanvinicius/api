import { injectable, inject } from 'tsyringe';

import Measure from '../infra/typeorm/entities/Measure';
import IMeasuresRepository from '../repositories/IMeasuresRepository';

interface IRequest {
  type: number;
}

@injectable()
export default class ListMeasureService {
  constructor(
    @inject('MeasuresRepository')
    private measuresRepository: IMeasuresRepository,
  ) {}

  public async execute({ type }: IRequest): Promise<Measure[] | undefined> {
    return this.measuresRepository.findByType(type);
  }
}
