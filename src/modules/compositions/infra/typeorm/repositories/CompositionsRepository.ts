import { Repository, getRepository } from 'typeorm';

import ICompositionsRepository from '@modules/compositions/repositories/ICompositionsRepository';

import ICreateCompositionDTO from '@modules/compositions/dtos/ICreateCompositionDTO';
import IFindProductivityByCulture from '@modules/compositions/dtos/IFindProductivityByCultureDTO';
import Composition from '../entities/Composition';

export default class CompositionsRepository implements ICompositionsRepository {
  private ormRepository: Repository<Composition>;

  constructor() {
    this.ormRepository = getRepository(Composition);
  }

  public async findAllByProvider(
    provider_id: string,
  ): Promise<Composition[] | undefined> {
    return this.ormRepository.find({ where: { provider_id } });
  }

  public async findProductivityByCulture({
    productivity,
    culture_id,
  }: IFindProductivityByCulture): Promise<Composition | undefined> {
    return this.ormRepository.findOne({ where: { productivity, culture_id } });
  }

  public async create(
    data: ICreateCompositionDTO,
  ): Promise<Composition | undefined> {
    const composition = this.ormRepository.create(data);

    await this.ormRepository.save(composition);

    return composition;
  }
}
