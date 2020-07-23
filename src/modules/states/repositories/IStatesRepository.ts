import State from '@modules/states/infra/typeorm/entities/State';

export default interface IStatesRepository {
  findAll(): Promise<State[] | undefined>;
}
