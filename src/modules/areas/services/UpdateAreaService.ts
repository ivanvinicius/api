import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IAreasRepository from '../repositories/IAreasRepository';
import Area from '../infra/typeorm/entities/Area';

interface IRequest {
  id: string;
  user_id: string;
  measure_id: string;
  name: string;
  size: number;
}

@injectable()
export default class UpdateAreaService {
  constructor(
    @inject('AreasRepository')
    private areasRepository: IAreasRepository,
  ) {}

  public async execute({
    id,
    user_id,
    measure_id,
    name,
    size,
  }: IRequest): Promise<Area> {
    const area = await this.areasRepository.findById(id);

    if (!area) {
      throw new AppError('Area does not exists.', 400);
    }

    const findAreaWithSameName = await this.areasRepository.findAreaByUserAndName(
      { user_id, name },
    );

    if (findAreaWithSameName?.id !== area.id) {
      throw new AppError("This 'area name' is already used.", 400);
    }

    Object.assign(area, { measure_id, name, size });

    return this.areasRepository.update(area);
  }
}
