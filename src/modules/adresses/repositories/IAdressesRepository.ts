import Adresses from '@modules/adresses/infra/typeorm/entities/Adress';

export default interface IAdressesRepository {
  findAll(): Promise<Adresses[] | undefined>;
}
