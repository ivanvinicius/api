import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IProductsMeasuresRepository from '../repositories/IProductsMeasuresRepository';
import ProductMeasure from '../infra/typeorm/entities/ProductMeasure';

interface IRequest {
  provider_id: string;
  product_id: string;
  brand_id: string;
  measure_id: string;
  volume: number;
  price: number;
}

@injectable()
export default class CreateProductMeasureService {
  constructor(
    @inject('ProductsMeasuresRepository')
    private productsMeasuresRepository: IProductsMeasuresRepository,
  ) {}

  public async execute({
    provider_id,
    product_id,
    brand_id,
    measure_id,
    volume,
    price,
  }: IRequest): Promise<ProductMeasure> {
    const checkProductMeasureExists = await this.productsMeasuresRepository.findProductByProvider(
      { provider_id, product_id },
    );

    if (checkProductMeasureExists) {
      throw new AppError('This product measure already exists.');
    }

    const productMeasure = await this.productsMeasuresRepository.create({
      provider_id,
      product_id,
      brand_id,
      measure_id,
      volume,
      price,
    });

    return productMeasure;
  }
}
