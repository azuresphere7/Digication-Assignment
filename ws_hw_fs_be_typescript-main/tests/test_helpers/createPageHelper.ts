import faker from 'faker';
import { getRepository } from 'typeorm';

import PortfolioEntity from '../../src/entities/PortfolioEntity';
import PortfolioVersionEntity from '../../src/entities/PortfolioVersionEntity';
import PageEntity from '../../src/entities/PageEntity';
import { VERSION_TYPE } from '../../src/types/versions';

async function createPageEntity(portfolioId: number) {
  const portfolioRepository = getRepository(PortfolioEntity);
  const pageRepository = getRepository(PageEntity);

  // Find the portfolio and its draft version
  const portfolio: PortfolioEntity | undefined = await portfolioRepository.findOne(
    { id: portfolioId },
    { relations: ['versions'] }
  );
  if (!portfolio) throw new Error('Portfolio not found');

  const draftVersion: PortfolioVersionEntity | undefined = portfolio.versions.find(
    (version) => version.type === VERSION_TYPE.DRAFT
  );
  if (!draftVersion) throw new Error('Draft version not found');

  // Create a new page associated with the draft version
  const page: PageEntity = pageRepository.create({
    name: faker.lorem.words(3),
    url: faker.internet.url(),
    version: draftVersion,
  });

  return pageRepository.save(page);
}

export default createPageEntity;
