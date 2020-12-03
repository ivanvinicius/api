import Measure from '../infra/typeorm/entities/Measure';

export default interface IMeasuresRepository {
  findByType(type: number): Promise<Measure[] | undefined>;
}
