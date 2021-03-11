import { injectable, inject } from 'tsyringe';

import Composition from '@modules/compositions/infra/typeorm/entities/Composition';
import ICompositionsRepository from '../repositories/ICompositionsRepository';

@injectable()
export default class ListProviderCompositionService {
  constructor(
    @inject('CompositionsRepository')
    private compositionsRepository: ICompositionsRepository,
  ) {}

  public async execute(
    provider_id: string,
  ): Promise<Composition[] | undefined> {
    return this.compositionsRepository.findAllByProvider(provider_id);
  }
}
