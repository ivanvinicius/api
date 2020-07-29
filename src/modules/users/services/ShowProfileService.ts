import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
export default class ShowProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(id: string): Promise<User | undefined> {
    const userProfile = await this.usersRepository.showProfile(id);

    if (!userProfile) {
      throw new AppError('User does not exists.');
    }

    return userProfile;
  }
}
