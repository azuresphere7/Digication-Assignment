import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { getRepository } from 'typeorm';

import PortfolioEntity from '../entities/PortfolioEntity';
import PortfolioVersionEntity from '../entities/PortfolioVersionEntity';
import PageEntity from '../entities/PageEntity';
import { VERSION_TYPE } from '../types/versions';

@Resolver()
@Service()
export default class PortfolioVersionResolver {
  @Query(() => [PortfolioVersionEntity], { description: 'List all versions of a portfolio' })
  async listPortfolioVersions(@Arg('portfolioId') portfolioId: number): Promise<PortfolioVersionEntity[]> {
    const versionRepository = getRepository(PortfolioVersionEntity);
    const versions: PortfolioVersionEntity[] = await versionRepository.find({
      where: { portfolio: { id: portfolioId } },
    });
    return versions;
  }

  @Query(() => [PageEntity], { description: 'List all pages of a version' })
  async listPagesByVersion(@Arg('versionId') versionId: number): Promise<PageEntity[]> {
    const pageRepository = getRepository(PageEntity);
    const pages: PageEntity[] = await pageRepository.find({ where: { version: { id: versionId } } });
    return pages;
  }

  @Mutation(() => PortfolioVersionEntity, { description: 'Move pages in a draft version into published version' })
  async createPublishedVersion(@Arg('portfolioId') portfolioId: number): Promise<PortfolioVersionEntity> {
    const portfolioRepository = getRepository(PortfolioEntity);
    const versionRepository = getRepository(PortfolioVersionEntity);
    const pageRepository = getRepository(PageEntity);

    // Check if the portfolio exists
    const portfolio: PortfolioEntity | undefined = await portfolioRepository.findOne(
      { id: portfolioId },
      { relations: ['versions'] }
    );
    if (!portfolio) throw new Error('Portfolio not found');

    // Check if the portfolio has a draft version
    const draftVersion: PortfolioVersionEntity | undefined = portfolio.versions.find(
      (version: PortfolioVersionEntity) => version.type === VERSION_TYPE.DRAFT
    );
    if (!draftVersion) throw new Error('Draft version not found');

    const publishedVersion: PortfolioVersionEntity = versionRepository.create({
      type: VERSION_TYPE.PUBLISHED,
      portfolio,
      pages: [],
    });

    await versionRepository.save(publishedVersion);

    const pages: PageEntity[] = await pageRepository.find({ where: { version: draftVersion } });

    // Move pages from draft version to published version
    pages.map(async (page: PageEntity) => {
      page.version = publishedVersion;
      await pageRepository.save(page);
    });

    return publishedVersion;
  }

  @Mutation(() => PortfolioVersionEntity, { description: 'Create a snapshot version from the draft version' })
  async createSnapshotVersion(@Arg('portfolioId') portfolioId: number): Promise<PortfolioVersionEntity> {
    const portfolioRepository = getRepository(PortfolioEntity);
    const versionRepository = getRepository(PortfolioVersionEntity);
    const pageRepository = getRepository(PageEntity);

    // Check if the portfolio exists
    const portfolio: PortfolioEntity | undefined = await portfolioRepository.findOne(
      { id: portfolioId },
      { relations: ['versions'] }
    );
    if (!portfolio) throw new Error('Portfolio not found');

    // Check if the portfolio has a draft version
    const draftVersion: PortfolioVersionEntity | undefined = portfolio.versions.find(
      (version) => version.type === VERSION_TYPE.DRAFT
    );
    if (!draftVersion) throw new Error('Draft version not found');

    const snapshotVersion: PortfolioVersionEntity = versionRepository.create({
      type: VERSION_TYPE.SNAPSHOT,
      portfolio,
      pages: [],
    });

    const pages: PageEntity[] = await pageRepository.find({ where: { version: draftVersion } });
    await versionRepository.save(snapshotVersion);

    // Clone pages from draft version to snapshot version
    pages.map(async (page: PageEntity) => {
      const clonedPage = pageRepository.create({
        name: page.name,
        url: page.url,
        version: snapshotVersion,
      });

      await pageRepository.save(clonedPage);
      snapshotVersion.pages.push(clonedPage);
    });

    return snapshotVersion;
  }
}
