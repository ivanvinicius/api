import { inject, injectable } from 'tsyringe';

import Portfolio from '@modules/portfolios/infra/typeorm/entities/Portfolio';
import IProvidersCompositionsRepository from '@modules/portfolios/repositories/IProvidersCompositionsRepository';

interface IRequest {
  provider_id: string;
  culture_id: string;
  productivity: number;
}
@injectable()
export default class ListProviderCompositionService {
  constructor(
    @inject('ProvidersCompositionsRepository')
    private providersCompositionsRepository: IProvidersCompositionsRepository,
  ) {}

  public async execute({
    provider_id,
    culture_id,
    productivity,
  }: IRequest): Promise<Portfolio[] | undefined> {
    return this.providersCompositionsRepository.findAllByProviderCultureProductivity(
      {
        provider_id,
        culture_id,
        productivity,
      },
    );
  }
}
