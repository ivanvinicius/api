import User from '@modules/users/infra/typeorm/entities/User';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IShowProfileDTO from '@modules/users/dtos/IShowProfileDTO';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;

  findByEmail(email: string): Promise<User | undefined>;

  showProfile(data: IShowProfileDTO): Promise<User | undefined>;

  create(data: ICreateUserDTO): Promise<User>;

  saveUpdate(user: User): Promise<User>;
}
