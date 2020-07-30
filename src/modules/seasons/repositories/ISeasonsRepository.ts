import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import Season from '../infra/typeorm/entities/Season';

export default interface ISeasonsRepository {
  findById(id: string): Promise<Season | undefined>;

  findAllByUser(user_id: string): Promise<Season[] | undefined>;

  delete(id: string): Promise<IDeleteDTO>;
}
