import { Repository, getRepository, IsNull } from 'typeorm';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import Category from '@modules/categories/infra/typeorm/entities/Category';

export default class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findAllCategories(): Promise<Category[] | undefined> {
    return this.ormRepository.find({ where: { category_id: IsNull() } });
  }

  public async findAllByCategory(
    category_id: string,
  ): Promise<Category[] | undefined> {
    return this.ormRepository.find({ where: { category_id } });
  }
}
