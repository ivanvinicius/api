import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  is_provider?: boolean;
}

@injectable()
export default class ShowProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    user_id,
    is_provider,
  }: IRequest): Promise<User | undefined> {
    const userProfile = await this.usersRepository.showProfile({
      user_id,
      is_provider,
    });

    if (!userProfile) {
      throw new AppError('User does not exists.');
    }

    return userProfile;
  }
}
