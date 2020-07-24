import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCategoryService from '@modules/categories/services/ListCategoryService';

export default class CategoriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListCategoryService);

    const categories = await listCategories.execute();

    return response.json(categories);
  }
}
