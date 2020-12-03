import { inject, injectable } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import Product from '@modules/products/infra/typeorm/entities/Product';

@injectable()
export default class ListProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(provider_id: string): Promise<Product[] | undefined> {
    return this.productsRepository.findAllAvoidingDuplicates(provider_id);
  }
}
