import { injectable, inject } from 'tsyringe';

import ICategoriesRepository from '../repositories/ICategoriesRepository';
import Category from '../infra/typeorm/entities/Category';

@injectable()
export default class ListCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepositor: ICategoriesRepository,
  ) {}

  public async execute(): Promise<Category[] | undefined> {
    return this.categoriesRepositor.findAll();
  }
}
