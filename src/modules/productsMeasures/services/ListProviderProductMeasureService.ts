import { injectable, inject } from 'tsyringe';
import ProductMeasure from '../infra/typeorm/entities/ProductMeasure';
import IProductsMeasuresRepository from '../repositories/IProductsMeasuresRepository';

@injectable()
export default class ListProviderProductMeasureService {
  constructor(
    @inject('ProductsMeasuresRepository')
    private productsMeasuresRepository: IProductsMeasuresRepository,
  ) {}

  public async execute(
    provider_id: string,
  ): Promise<ProductMeasure[] | undefined> {
    return this.productsMeasuresRepository.findAllByProvider(provider_id);
  }
}
