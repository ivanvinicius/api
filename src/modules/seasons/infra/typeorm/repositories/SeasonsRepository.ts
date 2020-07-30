import { Repository, getRepository, Raw } from 'typeorm';

import ISeasonsRepository from '@modules/seasons/repositories/ISeasonsRepository';
import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import ICreateSeasonDTO from '@modules/seasons/dtos/ICreateSeasonDTO';
import IFindSeasonByUserAndNameDTO from '@modules/seasons/dtos/IFindSeasonByUserAndNameDTO';
import Season from '../entities/Season';

export default class SeasonsRepository implements ISeasonsRepository {
  private ormRepository: Repository<Season>;

  constructor() {
    this.ormRepository = getRepository(Season);
  }

  public async findById(id: string): Promise<Season | undefined> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async findAllByUser(user_id: string): Promise<Season[] | undefined> {
    return this.ormRepository.find({ where: { user_id } });
  }

  public async findSeasonByUserAndName({
    user_id,
    name,
  }: IFindSeasonByUserAndNameDTO): Promise<Season | undefined> {
    return this.ormRepository.findOne({
      where: {
        user_id,
        name: Raw(alias => `${alias} ILIKE '%${name}%'`),
      },
    });
  }

  public async create(seasonData: ICreateSeasonDTO): Promise<Season> {
    const season = await this.ormRepository.create(seasonData);

    await this.ormRepository.save(season);

    return season;
  }

  public async update(seasonData: Season): Promise<Season> {
    return this.ormRepository.save(seasonData);
  }

  public async delete(id: string): Promise<IDeleteDTO> {
    return this.ormRepository.delete(id);
  }
}
