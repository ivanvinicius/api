import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
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
  }: IRequest): Promise<Area> {}
}
