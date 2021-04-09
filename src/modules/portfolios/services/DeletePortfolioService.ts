import { injectable, inject } from 'tsyringe';

import IDeleteDTO from '@shared/dtos/IDeleteDTO';
import AppError from '@shared/errors/AppError';
import IPortfoliosRepository from '../repositories/IPortfoliosRepository';

@injectable()
export default class DeletePortfolioService {
  constructor(
    @inject('PortfoliosRepository')
    private portfoliosRepository: IPortfoliosRepository,
  ) {}

  public async execute(id: string): Promise<IDeleteDTO> {
    const checkPortfolioExists = await this.portfoliosRepository.findById(id);

    if (!checkPortfolioExists) {
      throw new AppError('Portfólio informada não existe.', 400);
    }

    const deletedPortfolio = await this.portfoliosRepository.delete(id);

    if (deletedPortfolio.affected === 0) {
      throw new AppError('Impossível deletar o item.', 400);
    }

    return deletedPortfolio;
  }
}
