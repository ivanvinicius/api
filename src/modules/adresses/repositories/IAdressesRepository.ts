import Adresses from '@modules/adresses/infra/typeorm/entities/Adress';

export default interface IAdressesRepository {
  findAllByState(state_id: string): Promise<Adresses[] | undefined>;
}
