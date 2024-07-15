import PortfolioEntity from '../../src/entities/PortfolioEntity';
import PortfolioVersionEntity from '../../src/entities/PortfolioVersionEntity';
import PageEntity from '../../src/entities/PageEntity';
import { VERSION_TYPE } from '../../src/types/versions';

import createApolloServer from '../test_helpers/createApolloServer';
import createPortfolioEntity from '../test_helpers/createPortfolioHelper';
import createPortfolioVersionEntity from '../test_helpers/createPortfolioVersionHelper';
import createPageEntity from '../test_helpers/createPageHelper';

describe('PortfolioVersionResolver', () => {
  const LIST_PORTFOLIO_VERSIONS_QUERY = `
    query ListPortfolioVersions($portfolioId: Float!) {
      listPortfolioVersions(portfolioId: $portfolioId) {
        id
        type
      }
    }
  `;

  const LIST_PAGES_BY_VERSION_QUERY = `
    query ListPagesByVersion($versionId: Float!) {
      listPagesByVersion(versionId: $versionId) {
        id
        name
        url
      }
    }
  `;

  const CREATE_PUBLISHED_VERSION_MUTATION = `
    mutation CreatePublishedVersion($portfolioId: Float!) {
      createPublishedVersion(portfolioId: $portfolioId) {
        id
        type
      }
    }
  `;

  const CREATE_SNAPSHOT_VERSION_MUTATION = `
    mutation CreateSnapshotVersion($portfolioId: Float!) {
      createSnapshotVersion(portfolioId: $portfolioId) {
        id
        type
      }
    }
  `;

  let portfolio: PortfolioEntity;
  let publishedVersion: PortfolioVersionEntity;
  let page1: PageEntity;
  let page2: PageEntity;

  beforeAll(async () => {
    portfolio = await createPortfolioEntity();
    publishedVersion = await createPortfolioVersionEntity(portfolio.id, VERSION_TYPE.PUBLISHED);
    page1 = await createPageEntity(portfolio.id);
    page2 = await createPageEntity(portfolio.id);
  });

  test('ListPortfolioVersions: Should return portfolio versions', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: LIST_PORTFOLIO_VERSIONS_QUERY,
      variables: { portfolioId: portfolio.id },
    });
    expect(response).toGraphQLResponseData({
      listPortfolioVersions: [
        {
          id: expect.any(Number),
          type: VERSION_TYPE.DRAFT,
        },
        {
          id: publishedVersion.id,
          type: VERSION_TYPE.PUBLISHED,
        },
      ],
    });
  });

  test('ListPagesByVersion: Should return pages of a version', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: LIST_PAGES_BY_VERSION_QUERY,
      variables: { versionId: 1 },
    });
    expect(response).toGraphQLResponseData({
      listPagesByVersion: [
        {
          id: page1.id,
          name: page1.name,
          url: page1.url,
        },
        {
          id: page2.id,
          name: page2.name,
          url: page2.url,
        },
      ],
    });
  });

  test('CreatePublishedVersion: Should create a published version from draft', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: CREATE_PUBLISHED_VERSION_MUTATION,
      variables: { portfolioId: portfolio.id },
    });
    expect(response).toGraphQLResponseData({
      createPublishedVersion: {
        id: expect.any(Number),
        type: VERSION_TYPE.PUBLISHED,
      },
    });
  });

  test('CreateSnapshotVersion: Should create a snapshot version from draft', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: CREATE_SNAPSHOT_VERSION_MUTATION,
      variables: { portfolioId: portfolio.id },
    });
    expect(response).toGraphQLResponseData({
      createSnapshotVersion: {
        id: expect.any(Number),
        type: VERSION_TYPE.SNAPSHOT,
      },
    });
  });
});
