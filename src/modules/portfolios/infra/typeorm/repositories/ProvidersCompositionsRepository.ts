import { getRepository, Repository } from 'typeorm';

import ICreateProviderCompositionDTO from '@modules/portfolios/dtos/ICreateProviderCompositionDTO';
import IFindAllByProviderCultureProductivityDTO from '@modules/portfolios/dtos/IFindAllByProviderCultureProductivityDTO';
import IFindProviderCompositionAvoidDuplicateDTO from '@modules/portfolios/dtos/IFindProviderCompositionAvoidDuplicateDTO';
import IProvidersCompositionsRepository from '@modules/portfolios/repositories/IProvidersCompositionsRepository';
import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import Portfolio from '../entities/Portfolio';

export default class ProvidersCompositionsRepository
  implements IProvidersCompositionsRepository {
  private ormRepository: Repository<Portfolio>;

  constructor() {
    this.ormRepository = getRepository(Portfolio);
  }

  public async findById(id: string): Promise<Portfolio | undefined> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async findProviderCompositionAvoidDuplicate({
    provider_id,
    culture_id,
    productivity,
  }: IFindProviderCompositionAvoidDuplicateDTO): Promise<
    Portfolio | undefined
  > {
    return this.ormRepository.findOne({
      where: { provider_id, culture_id, productivity },
    });
  }

  public async findAllByProviderCultureProductivity({
    provider_id,
    culture_id,
    productivity,
  }: IFindAllByProviderCultureProductivityDTO): Promise<
    Portfolio[] | undefined
  > {
    return this.ormRepository.find({
      where: { provider_id, culture_id, productivity },
    });
  }

  public async create(
    data: ICreateProviderCompositionDTO[],
  ): Promise<Portfolio[] | undefined> {
    const composition = this.ormRepository.create(data);

    await this.ormRepository.save(composition);

    return composition;
  }

  public async delete(ids: Array<string>): Promise<IDeleteDTO> {
    return this.ormRepository.delete(ids);
  }
}
