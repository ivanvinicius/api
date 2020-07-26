import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Brand from '../infra/typeorm/entities/Brand';
import IBrandsRepository from '../repositories/IBrandsRepository';

@injectable()
export default class ListBrandService {
  constructor(
    @inject('BrandsRepository')
    private brandsRepository: IBrandsRepository,
  ) {}

  public async execute(): Promise<Brand[] | undefined> {
    const brands = await this.brandsRepository.findAll();

    if (!brands) {
      throw new AppError('Brand does not exists.');
    }

    return brands;
  }
}
