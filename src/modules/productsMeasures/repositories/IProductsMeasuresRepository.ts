import ProductMeasure from '../infra/typeorm/entities/ProductMeasure';
import ICreateProductMeasureDTO from '../dtos/ICreateProductMeasureDTO';
import IFindProductByProviderDTO from '../dtos/IFindProductByProviderDTO';
import IDeleteProductMeasureResultDTO from '../dtos/IDeleteProductMeasureResultDTO';

export default interface IProductsMeasuresRepository {
  findById(id: string): Promise<ProductMeasure | undefined>;

  findProductByProvider(
    data: IFindProductByProviderDTO,
  ): Promise<ProductMeasure | undefined>;

  create(data: ICreateProductMeasureDTO): Promise<ProductMeasure>;

  saveUpdate(productMeasure: ProductMeasure): Promise<ProductMeasure>;

  delete(id: string): Promise<IDeleteProductMeasureResultDTO>;
}
