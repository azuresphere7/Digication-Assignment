import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { getRepository } from 'typeorm';

import PortfolioEntity from '../entities/PortfolioEntity';
import PortfolioVersionEntity from '../entities/PortfolioVersionEntity';
import PageEntity from '../entities/PageEntity';
import { VERSION_TYPE } from '../types/versions';

@Resolver()
@Service()
export default class PortfolioResolver {
  @Query(() => [PortfolioEntity], { description: 'List all portfolios' })
  async listPortfolios(): Promise<PortfolioEntity[]> {
    const portfolioRepository = getRepository(PortfolioEntity);
    return portfolioRepository.find({ relations: ['versions'] });
  }

  @Query(() => PortfolioEntity || undefined, { nullable: true, description: 'Get a portfolio by ID' })
  async getPortfolio(@Arg('id') id: number): Promise<PortfolioEntity | undefined> {
    const portfolioRepository = getRepository(PortfolioEntity);
    return portfolioRepository.findOne(id, { relations: ['versions'] });
  }

  @Mutation(() => PortfolioEntity, { description: 'Create a new portfolio' })
  async createPortfolio(@Arg('name') name: string, @Arg('url') url: string): Promise<PortfolioEntity> {
    const portfolioRepository = getRepository(PortfolioEntity);
    const versionRepository = getRepository(PortfolioVersionEntity);

    const existPortfolio = await portfolioRepository.findOne({ where: { url } });
    if (existPortfolio) {
      throw new Error('Portfolio already exists');
    }

    const portfolio: PortfolioEntity = portfolioRepository.create({ name, url });
    await portfolioRepository.save(portfolio);

    const draftVersion: PortfolioVersionEntity = versionRepository.create({ type: VERSION_TYPE.DRAFT, portfolio });
    await versionRepository.save(draftVersion);

    return portfolio;
  }

  @Mutation(() => PortfolioEntity || undefined, { nullable: true, description: 'Update a portfolio' })
  async updatePortfolio(
    @Arg('id') id: number,
    @Arg('name', { nullable: true }) name?: string,
    @Arg('url', { nullable: true }) url?: string
  ): Promise<PortfolioEntity | undefined> {
    const portfolioRepository = getRepository(PortfolioEntity);
    const portfolio: PortfolioEntity | undefined = await portfolioRepository.findOne(id, { relations: ['versions'] });

    // Check if the portfolio exists
    if (!portfolio) {
      return undefined;
    }

    // Update the portfolio name and url
    portfolio.name = name !== undefined ? name : portfolio.name;
    portfolio.url = url !== undefined ? url : portfolio.url;

    await portfolioRepository.save(portfolio);
    return portfolio;
  }

  @Mutation(() => Boolean, { description: 'Delete a portfolio' })
  async deletePortfolio(@Arg('id') id: number): Promise<boolean> {
    const portfolioRepository = getRepository(PortfolioEntity);
    const versionRepository = getRepository(PortfolioVersionEntity);
    const pageRepository = getRepository(PageEntity);

    const portfolio: PortfolioEntity | undefined = await portfolioRepository.findOne(id, { relations: ['versions'] });
    if (!portfolio) throw new Error('Portfolio not found');

    const versions: PortfolioVersionEntity[] = await versionRepository.find({
      where: { portfolio: { id: portfolio.id } },
      relations: ['pages'],
    });

    versions.map(async (version: PortfolioVersionEntity) => {
      await pageRepository.delete({ version: { id: version.id } });
    });
    await versionRepository.delete({ portfolio: { id: portfolio.id } });
    await portfolioRepository.delete(portfolio.id);

    return true;
  }
}
