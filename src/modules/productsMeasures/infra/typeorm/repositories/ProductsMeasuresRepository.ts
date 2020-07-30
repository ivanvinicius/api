import { Repository, getRepository } from 'typeorm';

import IProductsMeasuresRepository from '@modules/productsMeasures/repositories/IProductsMeasuresRepository';
import ICreateProductMeasureDTO from '@modules/productsMeasures/dtos/ICreateProductMeasureDTO';
import IFindProductByProviderDTO from '@modules/productsMeasures/dtos/IFindProductByProviderDTO';
import IDeleteDTO from '@shared/dtos/IDeleteDTO';

import ProductMeasure from '../entities/ProductMeasure';

export default class ProductsMeasuresRepository
  implements IProductsMeasuresRepository {
  private ormRepository: Repository<ProductMeasure>;

  constructor() {
    this.ormRepository = getRepository(ProductMeasure);
  }

  public async findById(id: string): Promise<ProductMeasure | undefined> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async findProductByProvider({
    product_id,
    provider_id,
  }: IFindProductByProviderDTO): Promise<ProductMeasure | undefined> {
    return this.ormRepository.findOne({
      where: { product_id, provider_id },
    });
  }

  public async findAllByProvider(
    provider_id: string,
  ): Promise<ProductMeasure[] | undefined> {
    return this.ormRepository.find({ where: { provider_id } });
  }

  public async create(data: ICreateProductMeasureDTO): Promise<ProductMeasure> {
    const productMeasure = await this.ormRepository.create(data);

    await this.ormRepository.save(productMeasure);

    return productMeasure;
  }

  public async saveUpdate(
    productMeasure: ProductMeasure,
  ): Promise<ProductMeasure> {
    return this.ormRepository.save(productMeasure);
  }

  public async delete(id: string): Promise<IDeleteDTO> {
    return this.ormRepository.delete(id);
  }
}
