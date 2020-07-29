import Subcategory from '../infra/typeorm/entities/Subcategory';

export default interface ISubcategoriesRepository {
  findAllByCategory(category_id: string): Promise<Subcategory[] | undefined>;
}
