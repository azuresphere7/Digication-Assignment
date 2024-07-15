import { getRepository } from 'typeorm';

import PortfolioEntity from '../../src/entities/PortfolioEntity';
import PortfolioVersionEntity from '../../src/entities/PortfolioVersionEntity';
import { VERSION_TYPE } from '../../src/types/versions';

async function createPortfolioVersionEntity(portfolioId: number, type: keyof typeof VERSION_TYPE) {
  const versionRepository = getRepository(PortfolioVersionEntity);
  const portfolioRepository = getRepository(PortfolioEntity);

  const portfolio: PortfolioEntity | undefined = await portfolioRepository.findOne({ id: portfolioId });
  if (!portfolio) throw new Error('Portfolio not found');

  const version: PortfolioVersionEntity | undefined = versionRepository.create({
    type: VERSION_TYPE[type],
    portfolio,
  });

  return versionRepository.save(version);
}

export default createPortfolioVersionEntity;
