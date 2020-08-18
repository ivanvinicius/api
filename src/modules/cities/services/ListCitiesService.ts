import { inject, injectable } from 'tsyringe';

import City from '@modules/cities/infra/typeorm/entities/City';
import ICitiesRepository from '@modules/cities/repositories/ICitiesRepository';

interface IRequest {
  state_id: string;
}

@injectable()
export default class ListCitiesService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({ state_id }: IRequest): Promise<City[] | undefined> {
    return this.citiesRepository.findAllByState(state_id);
  }
}
