import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICulturesRepository from '@modules/cultures/repositories/ICulturesRepository';
import IProductsMeasuresRepository from '@modules/productsMeasures/repositories/IProductsMeasuresRepository';

import ICompositionsRepository from '../repositories/ICompositionsRepository';
import Composition from '../infra/typeorm/entities/Composition';

interface IRequest {
  provider_id: string;
  culture_id: string;
  productivity: 1 | 2 | 3;
  products_measures: Array<{
    id: string;
    volume: string;
  }>;
}

@injectable()
export default class CreateCompositionService {
  constructor(
    @inject('CompositionsRepository')
    private compositionsRepository: ICompositionsRepository,

    @inject('CulturesRepository')
    private culturesRepository: ICulturesRepository,

    @inject('ProductsMeasuresRepository')
    private productsMeasuresRepository: IProductsMeasuresRepository,
  ) {}

  public async execute({
    provider_id,
    culture_id,
    productivity,
    products_measures,
  }: IRequest): Promise<Composition | undefined | any> {
    const cultureExists = await this.culturesRepository.findById(culture_id);

    if (!cultureExists) {
      throw new AppError('Culture does not exists', 400);
    }

    const checkProductivityAlreadyInUse = await this.compositionsRepository.findProductivityByCulture(
      {
        productivity,
        culture_id,
      },
    );

    if (checkProductivityAlreadyInUse) {
      throw new AppError(
        'This level of productivity is already in use by informed culture',
        400,
      );
    }

    const repositoryIds = await this.productsMeasuresRepository.findAllProductMeasureIds();

    if (!repositoryIds?.length) {
      throw new AppError('unable to find the products measures informed', 400);
    }
    const requestIds = products_measures.map(({ id }) => id);

    const includedIds = repositoryIds.filter((item: string) =>
      requestIds.includes(item),
    );

    if (!includedIds?.length) {
      throw new AppError('Unable to find an item by informed ID', 400);
    }

    const data = {
      provider_id,
      culture_id,
      productivity,
      products_measures,
    };

    console.log(data);

    // const composition = this.compositionsRepository.create(data);

    return undefined;
  }
}
