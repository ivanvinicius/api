import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IDeleteProductMeasureResultDTO from '../dtos/IDeleteProductMeasureResultDTO';
import IProductsMeasuresRepository from '../repositories/IProductsMeasuresRepository';

@injectable()
export default class DeleteProductMeasureService {
  constructor(
    @inject('ProductsMeasuresRepository')
    private productsMeasuresRepository: IProductsMeasuresRepository,
  ) {}

  public async execute(id: string): Promise<IDeleteProductMeasureResultDTO> {
    const productMeasure = await this.productsMeasuresRepository.findById(id);

    if (!productMeasure) {
      throw new AppError('Product measure does not exists.');
    }

    return this.productsMeasuresRepository.delete(id);
  }
}
