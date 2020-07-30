import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import Season from '../infra/typeorm/entities/Season';
import ICreateSeasonDTO from '../dtos/ICreateSeasonDTO';
import IFindSeasonByUserAndNameDTO from '../dtos/IFindSeasonByUserAndNameDTO';

export default interface ISeasonsRepository {
  findById(id: string): Promise<Season | undefined>;

  findAllByUser(user_id: string): Promise<Season[] | undefined>;

  findSeasonByUserAndName({
    user_id,
    name,
  }: IFindSeasonByUserAndNameDTO): Promise<Season | undefined>;

  create(seasonData: ICreateSeasonDTO): Promise<Season>;

  update(seasonData: Season): Promise<Season>;

  delete(id: string): Promise<IDeleteDTO>;
}
