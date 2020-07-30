import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import IProductsMeasuresRepository from '../repositories/IProductsMeasuresRepository';

@injectable()
export default class DeleteProductMeasureService {
  constructor(
    @inject('ProductsMeasuresRepository')
    private productsMeasuresRepository: IProductsMeasuresRepository,
  ) {}

  public async execute(id: string): Promise<IDeleteDTO> {
    const checkProductMeasure = await this.productsMeasuresRepository.findById(
      id,
    );

    if (!checkProductMeasure) {
      throw new AppError('Product measure does not exists.');
    }

    const deletedProductMeasure = await this.productsMeasuresRepository.delete(
      id,
    );

    if (deletedProductMeasure.affected === 0) {
      throw new AppError('Unable to delete this item.');
    }

    return deletedProductMeasure;
  }
}
