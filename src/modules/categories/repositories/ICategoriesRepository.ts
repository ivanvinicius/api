import Category from '@modules/categories/infra/typeorm/entities/Category';

export default interface ICategoriesRepository {
  findAll(): Promise<Category[] | undefined>;
}
