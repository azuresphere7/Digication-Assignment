import faker from 'faker';
import { DeepPartial, getRepository } from 'typeorm';

import PortfolioEntity from '../../src/entities/PortfolioEntity';
import PortfolioVersionEntity from '../../src/entities/PortfolioVersionEntity';
import { VERSION_TYPE } from '../../src/types/versions';

export function buildPortfolioEntity(properties?: DeepPartial<PortfolioEntity>) {
  const repository = getRepository(PortfolioEntity);

  return repository.create({
    name: faker.company.companyName(),
    url: faker.internet.url(),
    ...properties,
  });
}

async function createPortfolioEntity(properties?: DeepPartial<PortfolioEntity>) {
  const portfolioRepository = getRepository(PortfolioEntity);
  const versionRepository = getRepository(PortfolioVersionEntity);

  const portfolio: PortfolioEntity = portfolioRepository.create(buildPortfolioEntity(properties));
  await portfolioRepository.save(portfolio);

  const draftVersion: PortfolioVersionEntity = versionRepository.create({
    type: VERSION_TYPE.DRAFT,
    portfolio,
  });
  await versionRepository.save(draftVersion);

  return portfolio;
}

export default createPortfolioEntity;
