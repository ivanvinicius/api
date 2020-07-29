import { Repository, getRepository } from 'typeorm';

import ISubcategoriesRepository from '@modules/subcategories/repositories/ISubcategoriesRepository';
import Subcategory from '../entities/Subcategory';

export default class SubcategoriesRepository
  implements ISubcategoriesRepository {
  private ormRepository: Repository<Subcategory>;

  constructor() {
    this.ormRepository = getRepository(Subcategory);
  }

  public async findAllByCategory(
    category_id: string,
  ): Promise<Subcategory[] | undefined> {
    return this.ormRepository.find({ where: { category_id } });
  }
}
