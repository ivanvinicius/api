import Category from '@modules/categories/infra/typeorm/entities/Category';

export default interface ICategoriesRepository {
  findAllCategories(): Promise<Category[] | undefined>;

  findAllByCategory(category_id: string): Promise<Category[] | undefined>;
}
