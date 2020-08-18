import { Repository, getRepository } from 'typeorm';
import { classToClass } from 'class-transformer';

import City from '@modules/cities/infra/typeorm/entities/City';
import ICitiesRepository from '@modules/cities/repositories/ICitiesRepository';

export default class CitiesRepository implements ICitiesRepository {
  private ormRepository: Repository<City>;

  constructor() {
    this.ormRepository = getRepository(City);
  }

  public async findAllByState(state_id: string): Promise<City[] | undefined> {
    const cities = await this.ormRepository.find({
      where: { state_id },
      join: {
        alias: 'city',
        innerJoinAndSelect: {
          state: 'city.state',
        },
      },
    });

    return classToClass(cities);
  }
}
