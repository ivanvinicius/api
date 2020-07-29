import { inject, injectable } from 'tsyringe';
import Subcategory from '../infra/typeorm/entities/Subcategory';
import ISubcategoriesRepository from '../repositories/ISubcategoriesRepository';

@injectable()
export default class ListSubcategoryService {
  constructor(
    @inject('SubcategoriesRepository')
    private subcategoriesRepository: ISubcategoriesRepository,
  ) {}

  public async execute(
    category_id: string,
  ): Promise<Subcategory[] | undefined> {
    return this.subcategoriesRepository.findAllByCategory(category_id);
  }
}
