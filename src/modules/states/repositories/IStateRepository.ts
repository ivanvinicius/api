import State from '@modules/states/infra/typeorm/entities/State';

export default interface IStatesRepository {
  create(data: string): Promise<State>;
}
