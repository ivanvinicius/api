import { container } from 'tsyringe';

import '@shared/container/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IStatesRepository from '@modules/states/repositories/IStatesRepository';
import StatesRepository from '@modules/states/infra/typeorm/repositories/StatesRepository';

import IAdressesRepository from '@modules/adresses/repositories/IAdressesRepository';
import AdressesRepository from '@modules/adresses/infra/typeorm/repositories/AdressesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IStatesRepository>(
  'StatesRepository',
  StatesRepository,
);

container.registerSingleton<IAdressesRepository>(
  'AdressesRepository',
  AdressesRepository,
);