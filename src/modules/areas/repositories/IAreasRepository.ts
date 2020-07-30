import Area from '@modules/areas/infra/typeorm/entities/Area';

import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import ICreateAreaDTO from '../dtos/ICreateAreaDTO';
import IFindAreaByUserAndNameDTO from '../dtos/ IFindAreaByUserAndNameDTO';

export default interface IAreasRepository {
  findById(id: string): Promise<Area | undefined>;

  findAreaByUserAndName({
    user_id,
    name,
  }: IFindAreaByUserAndNameDTO): Promise<Area | undefined>;

  findAllByUser(user_id: string): Promise<Area[] | undefined>;

  create(data: ICreateAreaDTO): Promise<Area>;

  update(areaData: Area): Promise<Area>;

  delete(id: string): Promise<IDeleteDTO>;
}
