import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { getRepository } from 'typeorm';

import PortfolioEntity from '../entities/PortfolioEntity';
import PageEntity from '../entities/PageEntity';

@Resolver()
@Service()
export default class PageResolver {
  @Query(() => [PageEntity], { description: 'List all pages' })
  async listPages(): Promise<PageEntity[]> {
    const pageRepository = getRepository(PageEntity);
    return pageRepository.find();
  }

  @Query(() => PageEntity || undefined, { nullable: true, description: 'Get a page by ID' })
  async getPage(@Arg('id') id: number): Promise<PageEntity | undefined> {
    const pageRepository = getRepository(PageEntity);
    return pageRepository.findOne(id);
  }

  @Mutation(() => PageEntity, { description: 'Create a new page' })
  async createPage(
    @Arg('name') name: string,
    @Arg('url') url: string,
    @Arg('portfolioId') portfolioId: number
  ): Promise<PageEntity> {
    const portfolioRepository = getRepository(PortfolioEntity);
    const pageRepository = getRepository(PageEntity);

    // Check if the portfolio exists
    const portfolio: PortfolioEntity | undefined = await portfolioRepository.findOne(portfolioId, {
      relations: ['versions'],
    });
    if (!portfolio) throw new Error('Portfolio not found');

    const page: PageEntity = pageRepository.create({
      name,
      url
    });

    await pageRepository.save(page);
    return page;
  }

  @Mutation(() => PageEntity || undefined, { nullable: true, description: 'Update a page' })
  async updatePage(
    @Arg('id') id: number,
    @Arg('name', { nullable: true }) name?: string,
    @Arg('url', { nullable: true }) url?: string
  ): Promise<PageEntity | undefined> {
    const pageRepository = getRepository(PageEntity);
    const page: PageEntity | undefined = await pageRepository.findOne(id);

    // Check if the page exists
    if (!page) {
      return undefined;
    }

    // Update the page name and url
    page.name = name !== undefined ? name : page.name;
    page.url = url !== undefined ? url : page.url;

    await pageRepository.save(page);
    return page;
  }

  @Mutation(() => Boolean, { description: 'Delete a page' })
  async deletePage(@Arg('id') id: number): Promise<boolean> {
    const pageRepository = getRepository(PageEntity);
    await pageRepository.delete(id);

    return true;
  }
}
