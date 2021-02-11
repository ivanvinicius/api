import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import ProductMeasure from '../infra/typeorm/entities/ProductMeasure';
import ICreateProductMeasureDTO from '../dtos/ICreateProductMeasureDTO';
import IFindProductByProviderDTO from '../dtos/IFindProductByProviderDTO';

export default interface IProductsMeasuresRepository {
  findById(id: string): Promise<ProductMeasure | undefined>;

  findProductByProvider(
    data: IFindProductByProviderDTO,
  ): Promise<ProductMeasure | undefined>;

  findAllByProvider(provider_id: string): Promise<ProductMeasure[] | undefined>;

  findAllProductMeasureIds(): Promise<Array<string> | undefined>;

  create(data: ICreateProductMeasureDTO): Promise<ProductMeasure>;

  saveUpdate(productMeasure: ProductMeasure): Promise<ProductMeasure>;

  delete(ids: Array<string>): Promise<IDeleteDTO>;
}
