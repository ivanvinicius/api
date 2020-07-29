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

import ICulturesRepository from '@modules/cultures/repositories/ICulturesRepository';
import CulturesRepository from '@modules/cultures/infra/typeorm/repositories/CulturesRepository';
import IProductsMeasuresRepository from '@modules/productsMeasures/repositories/IProductsMeasuresRepository';
import ProductsMeasuresRepository from '@modules/productsMeasures/infra/typeorm/repositories/ProductsMeasuresRepository';
import ISubcategoriesRepository from '@modules/subcategories/repositories/ISubcategoriesRepository';
import SubcategoriesRepository from '@modules/subcategories/infra/typeorm/repositories/SubcategoriesRepository';

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

container.registerSingleton<ISubcategoriesRepository>(
  'SubcategoriesRepository',
  SubcategoriesRepository,
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

container.registerSingleton<ICulturesRepository>(
  'CulturesRepository',
  CulturesRepository,
);

container.registerSingleton<IProductsMeasuresRepository>(
  'ProductsMeasuresRepository',
  ProductsMeasuresRepository,
);
