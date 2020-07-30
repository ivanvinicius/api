import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IAreasRepository from '../repositories/IAreasRepository';
import Area from '../infra/typeorm/entities/Area';

interface IRequest {
  user_id: string;
  measure_id: string;
  name: string;
  size: number;
}

@injectable()
export default class CreateAreaService {
  constructor(
    @inject('AreasRepository')
    private areasRepository: IAreasRepository,
  ) {}

  public async execute({
    user_id,
    measure_id,
    name,
    size,
  }: IRequest): Promise<Area> {
    const checkAreaExists = await this.areasRepository.findAreaByUserAndName({
      user_id,
      name,
    });

    if (checkAreaExists) {
      throw new AppError("This 'area name' is already used.");
    }

    return this.areasRepository.create({ user_id, measure_id, name, size });
  }
}
