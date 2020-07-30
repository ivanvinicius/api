import { Repository, getRepository, Raw } from 'typeorm';

import IAreasRepository from '@modules/areas/repositories/IAreasRepository';
import Area from '@modules/areas/infra/typeorm/entities/Area';
import ICreateAreaDTO from '@modules/areas/dtos/ICreateAreaDTO';
import IFindAreaByUserAndNameDTO from '@modules/areas/dtos/ IFindAreaByUserAndNameDTO';
import IDeleteDTO from '@shared/dtos/IDeleteDTO';

export default class AreasRepository implements IAreasRepository {
  private ormRepository: Repository<Area>;

  constructor() {
    this.ormRepository = getRepository(Area);
  }

  public async findById(id: string): Promise<Area | undefined> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async findAreaByUserAndName({
    user_id,
    name,
  }: IFindAreaByUserAndNameDTO): Promise<Area | undefined> {
    return this.ormRepository.findOne({
      where: {
        user_id,
        name: Raw(alias => `${alias} ILIKE '%${name}%'`),
      },
    });
  }

  public async findAllByUser(user_id: string): Promise<Area[] | undefined> {
    return this.ormRepository.find({ where: { user_id } });
  }

  public async create(areaData: ICreateAreaDTO): Promise<Area> {
    const area = await this.ormRepository.create(areaData);

    await this.ormRepository.save(area);

    return area;
  }

  public async update(areaData: Area): Promise<Area> {
    return this.ormRepository.save(areaData);
  }

  public async delete(id: string): Promise<IDeleteDTO> {
    return this.ormRepository.delete(id);
  }
}
