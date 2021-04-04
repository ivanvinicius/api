import Address from '../infra/typeorm/entities/Address';

export default interface IAddressesRepository {
  findAll(): Promise<Address[] | undefined>;
}
