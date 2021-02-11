import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductMeasureService from '@modules/productsMeasures/services/CreateProductMeasureService';
import UpdateProductMeasureService from '@modules/productsMeasures/services/UpdateProductMeasureService';
import DeleteProductMeasureService from '@modules/productsMeasures/services/DeleteProductMeasureService';

export default class ProductsMeasuresController {
  public async create(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { product_id, measure_id, volume, price } = request.body;

    const createProductMeasure = container.resolve(CreateProductMeasureService);

    const productMeasure = await createProductMeasure.execute({
      provider_id,
      product_id,
      measure_id,
      volume,
      price,
    });

    return response.json(productMeasure);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, measure_id, volume, price } = request.body;

    const updateProductMeasure = container.resolve(UpdateProductMeasureService);

    const productMeasure = await updateProductMeasure.execute({
      id,
      measure_id,
      volume,
      price,
    });

    return response.json(productMeasure);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const ids = request.body;

    const deleteProductMeasure = container.resolve(DeleteProductMeasureService);

    await deleteProductMeasure.execute(ids);

    return response.json();
  }
}
