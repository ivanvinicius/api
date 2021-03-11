import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IProductsMeasuresRepository from '../repositories/IProductsMeasuresRepository';
import ProductMeasure from '../infra/typeorm/entities/ProductMeasure';

interface IRequest {
  id: string;
  measure_id: string;
  volume: number;
  price: number;
}

@injectable()
export default class UpdateProductMeasureService {
  constructor(
    @inject('ProductsMeasuresRepository')
    private productsMeasuresRepository: IProductsMeasuresRepository,
  ) {}

  public async execute({
    id,
    measure_id,
    volume,
    price,
  }: IRequest): Promise<ProductMeasure> {
    const productMeasure = await this.productsMeasuresRepository.findById(id);

    if (!productMeasure) {
      throw new AppError('Product measure does not exists.', 400);
    }

    Object.assign(productMeasure, {
      measure_id,
      volume,
      price,
    });

    return this.productsMeasuresRepository.saveUpdate(productMeasure);
  }
}
