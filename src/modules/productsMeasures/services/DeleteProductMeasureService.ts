import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import IProductsMeasuresRepository from '../repositories/IProductsMeasuresRepository';

@injectable()
export default class DeleteProductMeasureService {
  constructor(
    @inject('ProductsMeasuresRepository')
    private productsMeasuresRepository: IProductsMeasuresRepository,
  ) {}

  public async execute(requestIds: Array<string>): Promise<IDeleteDTO> {
    if (!requestIds) {
      throw new AppError('Unable to find an item by informed ID', 400);
    }

    const repositoryIds = await this.productsMeasuresRepository.findAllProductMeasureIds();

    if (!repositoryIds?.length) {
      throw new AppError('You do not have any product measure signed', 400);
    }

    const includedIds = repositoryIds.filter(item => requestIds.includes(item));

    if (!includedIds?.length) {
      throw new AppError('Unable to find an item by informed ID', 400);
    }

    const deleteProductsMeasures = await this.productsMeasuresRepository.delete(
      includedIds,
    );

    if (deleteProductsMeasures.affected === 0) {
      throw new AppError('Unable to delete this item.', 400);
    }

    return deleteProductsMeasures;
  }
}
