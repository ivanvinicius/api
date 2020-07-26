import { container } from 'tsyringe';

import '@shared/container/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IStatesRepository from '@modules/states/repositories/IStatesRepository';
import StatesRepository from '@modules/states/infra/typeorm/repositories/StatesRepository';

import IAdressesRepository from '@modules/adresses/repositories/IAdressesRepository';
import AdressesRepository from '@modules/adresses/infra/typeorm/repositories/AdressesRepository';

import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';
import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

import IBrandsRepository from '@modules/brands/repositories/IBrandsRepository';
import BrandsRepository from '@modules/brands/infra/typeorm/repositories/BrandsRepository';
import IMeasuresRepository from '@modules/measures/repositories/IMeasuresRepository';
import MeasuresRepository from '@modules/measures/infra/typeorm/repositories/MeasuresRepository';

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

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IBrandsRepository>(
  'BrandsRepository',
  BrandsRepository,
);

container.registerSingleton<IMeasuresRepository>(
  'MeasuresRepository',
  MeasuresRepository,
);
