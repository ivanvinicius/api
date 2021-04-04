import { TreeRepository, getTreeRepository } from 'typeorm';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import Category from '../entities/Category';

export default class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: TreeRepository<Category>;

  constructor() {
    this.ormRepository = getTreeRepository(Category);
  }

  public async findAll(): Promise<Category[] | undefined> {
    return this.ormRepository.findTrees();
  }
}
