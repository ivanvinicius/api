import { inject, injectable } from 'tsyringe';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import Category from '@modules/categories/infra/typeorm/entities/Category';

@injectable()
export default class ListCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(): Promise<Category[] | undefined> {
    return this.categoriesRepository.findAllCategories();
  }
}
