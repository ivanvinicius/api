import { inject, injectable } from 'tsyringe';

import Portfolio from '@modules/portfolios/infra/typeorm/entities/Portfolio';
import IProvidersCompositionsRepository from '@modules/portfolios/repositories/IProvidersCompositionsRepository';
import AppError from '@shared/errors/AppError';
import IDeleteDTO from '@shared/dtos/IDeleteDTO';

interface IRequest {
  provider_id: string;
  culture_id: string;
  productivity: number;
}
@injectable()
export default class DeleteProviderCompositionService {
  constructor(
    @inject('ProvidersCompositionsRepository')
    private providersCompositionsRepository: IProvidersCompositionsRepository,
  ) {}

  public async execute({
    provider_id,
    culture_id,
    productivity,
  }: IRequest): Promise<IDeleteDTO> {
    const compositionsExists = await this.providersCompositionsRepository.findAllByProviderCultureProductivity(
      {
        provider_id,
        culture_id,
        productivity,
      },
    );

    if (!compositionsExists) {
      throw new AppError('A composição não foi encontrada.', 400);
    }

    const ids: Array<string> = [];

    compositionsExists.map((composition: Portfolio) =>
      ids.push(composition.id),
    );

    const deletedCompositions = await this.providersCompositionsRepository.delete(
      ids,
    );

    if (deletedCompositions.affected === 0) {
      throw new AppError('Impossível deletar o item.', 400);
    }

    return deletedCompositions;
  }
}
