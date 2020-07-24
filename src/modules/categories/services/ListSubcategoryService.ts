import { inject, injectable } from 'tsyringe';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import AppError from '@shared/errors/AppError';
import Category from '@modules/categories/infra/typeorm/entities/Category';

interface IRequest {
  category_id: string;
}

@injectable()
export default class ListSubcategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({
    category_id,
  }: IRequest): Promise<Category[] | undefined> {
    const categories = await this.categoriesRepository.findAllByCategory(
      category_id,
    );

    if (!categories) {
      throw new AppError('Subcategory does not exists.');
    }

    return categories;
  }
}
