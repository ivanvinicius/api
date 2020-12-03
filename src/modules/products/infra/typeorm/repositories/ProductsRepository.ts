import { Repository, getRepository } from 'typeorm';

import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';

export default class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findAll(): Promise<Product[] | undefined> {
    return this.ormRepository.find();
  }

  public async findAllAvoidingDuplicates(
    provider_id: string,
  ): Promise<Product[] | undefined> {
    const query =
      'SELECT products.id AS product_id, products.name AS product_name, products.composition AS product_composition, brands.id AS brand_id, brands.name AS brand_name, subcategories.id AS subcategory_id, subcategories.name AS subcategory_name, categories.id AS category_id, categories.name AS category_name FROM products JOIN brands ON brands.id = products.brand_id JOIN subcategories ON subcategories.id = products.subcategory_id JOIN categories ON categories.id = subcategories.category_id JOIN products_measures ON products.id != products_measures.product_id WHERE products_measures.provider_id = $1';

    return this.ormRepository.query(query, [provider_id]);
  }

  // public async findAllAvoidingDuplicates(): Promise<Product[] | undefined> {
  // const products = await this.ormRepository
  //   .createQueryBuilder()
  //   .select([
  //     'products',
  //     'products_measures',
  //     'brands',
  //     'subcategories',
  //     'categories',
  //   ])
  //   .from(Product, 'products')
  //   .leftJoinAndSelect(
  //     ProductMeasure,
  //     'products_measures',
  //     'products.id != products_measures.product_id',
  //   )
  //   .leftJoinAndSelect(
  //     Brand,
  //     'brands',
  //     'brands.id = products.brand_id')
  //   .leftJoinAndSelect(
  //     Subcategory,
  //     'subcategories',
  //     'subcategories.id = products.subcategory_id',
  //   )
  //   .leftJoinAndSelect(
  //     Category,
  //     'categories',
  //     'categories.id = subcategories.category_id',
  //   )
  //   .where('products_measures.provider_id = :provider', {
  //     provider: '591615b0-b4c6-46cb-8296-eb2302865a0b',
  //   })
  //   .getMany();
  // return products;
  // }
}
