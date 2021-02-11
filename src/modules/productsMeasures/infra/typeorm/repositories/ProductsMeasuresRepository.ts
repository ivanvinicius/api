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

  public async findAllProductMeasureIds(): Promise<Array<string> | undefined> {
    const data = await this.ormRepository.find({ select: ['id'] });

    const ids = data.map(({ id }) => id);

    return ids;
  }

  public async findAllByProvider(
    provider_id: string,
  ): Promise<ProductMeasure[] | undefined> {
    const SelectProductMeasureQuery =
      'SELECT ProductMeasure.id AS ProductMeasure_id,' +
      ' ProductMeasure.provider_id AS ProductMeasure_provider_id,' +
      ' ProductMeasure.product_id AS ProductMeasure_product_id,' +
      ' ProductMeasure.measure_id AS ProductMeasure_measure_id,' +
      ' ProductMeasure.volume AS ProductMeasure_volume,' +
      ' ProductMeasure.price AS ProductMeasure_price,' +
      ' ProductMeasure_product.id AS ProductMeasure_product_id,' +
      ' ProductMeasure_product.subcategory_id AS ProductMeasure_product_subcategory_id,' +
      ' ProductMeasure_product.brand_id AS ProductMeasure_product_brand_id,' +
      ' ProductMeasure_product.name AS ProductMeasure_product_name,' +
      ' ProductMeasure_product.composition AS ProductMeasure_product_composition,' +
      ' ProductMeasure_product_subcategory.id AS ProductMeasure_product_subcategory_id,' +
      ' ProductMeasure_product_subcategory.category_id AS ProductMeasure_product_subcategory_category_id,' +
      ' ProductMeasure_product_subcategory.name AS ProductMeasure_product_subcategory_name,' +
      ' ProductMeasure_product_subcategory_category.id AS ProductMeasure_product_subcategory_category_id,' +
      ' ProductMeasure_product_subcategory_category.name AS ProductMeasure_product_subcategory_category_name,' +
      ' ProductMeasure_product_brand.id AS ProductMeasure_product_brand_id,' +
      ' ProductMeasure_product_brand.name AS ProductMeasure_product_brand_name,' +
      ' ProductMeasure_measure.id AS ProductMeasure_measure_id,' +
      ' ProductMeasure_measure.name AS ProductMeasure_measure_name,' +
      ' ProductMeasure_measure.type AS ProductMeasure_measure_type' +
      ' FROM products_measures ProductMeasure' +
      ' LEFT JOIN products ProductMeasure_product' +
      ' ON ProductMeasure_product.id=ProductMeasure.product_id' +
      ' LEFT JOIN subcategories ProductMeasure_product_subcategory' +
      ' ON ProductMeasure_product_subcategory.id=ProductMeasure_product.subcategory_id' +
      ' LEFT JOIN categories ProductMeasure_product_subcategory_category' +
      ' ON ProductMeasure_product_subcategory_category.id=ProductMeasure_product_subcategory.category_id' +
      ' LEFT JOIN brands ProductMeasure_product_brand' +
      ' ON ProductMeasure_product_brand.id=ProductMeasure_product.brand_id' +
      ' LEFT JOIN measures ProductMeasure_measure' +
      ' ON ProductMeasure_measure.id=ProductMeasure.measure_id' +
      ' WHERE ProductMeasure.provider_id = $1';

    const productsMeasures = await this.ormRepository.query(
      SelectProductMeasureQuery,
      [provider_id],
    );

    return productsMeasures;
  }

  public async create(data: ICreateProductMeasureDTO): Promise<ProductMeasure> {
    const productMeasure = this.ormRepository.create(data);

    await this.ormRepository.save(productMeasure);

    return productMeasure;
  }

  public async saveUpdate(
    productMeasure: ProductMeasure,
  ): Promise<ProductMeasure> {
    return this.ormRepository.save(productMeasure);
  }

  public async delete(ids: Array<string>): Promise<IDeleteDTO> {
    return this.ormRepository
      .createQueryBuilder()
      .delete()
      .from(ProductMeasure)
      .where('products_measures.id IN(:...ids)', { ids })
      .execute();
  }
}
