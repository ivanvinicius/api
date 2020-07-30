import { injectable, inject } from 'tsyringe';

import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import AppError from '@shared/errors/AppError';
import IAreasRepository from '../repositories/IAreasRepository';

@injectable()
export default class DeleteAreaService {
  constructor(
    @inject('AreasRepository')
    private areasRepository: IAreasRepository,
  ) {}

  public async execute(id: string): Promise<IDeleteDTO> {
    const checkAreaExists = await this.areasRepository.findById(id);

    if (!checkAreaExists) {
      throw new AppError('Area does not exists.');
    }

    return this.areasRepository.delete(id);
  }
}
