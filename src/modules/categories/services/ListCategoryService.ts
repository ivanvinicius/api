import { inject, injectable } from 'tsyringe';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import AppError from '@shared/errors/AppError';
import Category from '@modules/categories/infra/typeorm/entities/Category';

@injectable()
export default class ListCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(): Promise<Category[] | undefined> {
    const categories = await this.categoriesRepository.findAllCategories();

    if (!categories) {
      throw new AppError('Category does not exists.');
    }

    return categories;
  }
}
