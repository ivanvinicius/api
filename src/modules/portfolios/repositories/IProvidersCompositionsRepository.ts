import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import Portfolio from '../infra/typeorm/entities/Portfolio';
import ICreateProviderCompositionDTO from '../dtos/ICreateProviderCompositionDTO';
import IFindProviderCompositionAvoidDuplicateDTO from '../dtos/IFindProviderCompositionAvoidDuplicateDTO';
import IFindAllByProviderCultureProductivityDTO from '../dtos/IFindAllByProviderCultureProductivityDTO';

export default interface IProvidersCompositionsRepository {
  findById(id: string): Promise<Portfolio | undefined>;
  findProviderCompositionAvoidDuplicate(
    data: IFindProviderCompositionAvoidDuplicateDTO,
  ): Promise<Portfolio | undefined>;
  findAllByProviderCultureProductivity(
    data: IFindAllByProviderCultureProductivityDTO,
  ): Promise<Portfolio[] | undefined>;
  create(
    data: ICreateProviderCompositionDTO[],
  ): Promise<Portfolio[] | undefined>;

  delete(ids: Array<string>): Promise<IDeleteDTO>;
}
