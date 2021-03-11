import Composition from '../infra/typeorm/entities/Composition';

import ICreateCompositionDTO from '../dtos/ICreateCompositionDTO';
import IFindProductivityByCulture from '../dtos/IFindProductivityByCultureDTO';

export default interface ICompositionsRepository {
  findAllByProvider(provider_id: string): Promise<Composition[] | undefined>;

  findProductivityByCulture({
    productivity,
    culture_id,
  }: IFindProductivityByCulture): Promise<Composition | undefined>;

  create(data: ICreateCompositionDTO): Promise<Composition | undefined>;
}
