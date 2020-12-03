import { Repository, getRepository } from 'typeorm';

import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductMeasure from '@modules/productsMeasures/infra/typeorm/entities/ProductMeasure';
import Brand from '@modules/brands/infra/typeorm/entities/Brand';
import Subcategory from '@modules/subcategories/infra/typeorm/entities/Subcategory';
import Category from '@modules/categories/infra/typeorm/entities/Category';

export default class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findAll(): Promise<Product[] | undefined> {
    return this.ormRepository.find();
  }

  /* eslint-disable */

  public async findAllAvoidingDuplicates(): Promise<Product[] | undefined> {
    const products = await this.ormRepository
      .createQueryBuilder()
      .select([
        'products',
        'products_measures',
        'brands',
        'subcategories',
        'categories',
      ])
      .from(Product, 'products')
      .leftJoinAndSelect(
        ProductMeasure,
        'products_measures',
        'products.id != products_measures.product_id',
      )
      .leftJoinAndSelect(
        Brand,
        'brands',
        'brands.id = products.brand_id')
      .leftJoinAndSelect(
        Subcategory,
        'subcategories',
        'subcategories.id = products.subcategory_id',
      )
      .leftJoinAndSelect(
        Category,
        'categories',
        'categories.id = subcategories.category_id',
      )
      .where('products_measures.provider_id = :provider', {
        provider: '591615b0-b4c6-46cb-8296-eb2302865a0b',
      })
      .getMany();

    return products;
  }
}
