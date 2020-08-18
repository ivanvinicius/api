import City from '@modules/cities/infra/typeorm/entities/City';

export default interface ICitiesRepository {
  findAllByState(state_id: string): Promise<City[] | undefined>;
}
