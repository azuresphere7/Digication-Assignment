import PortfolioEntity from '../../src/entities/PortfolioEntity';
import { VERSION_TYPE } from '../../src/types/versions';

import createApolloServer from '../test_helpers/createApolloServer';
import createPortfolioEntity from '../test_helpers/createPortfolioHelper';

describe('PortfolioResolver', () => {
  const LIST_PORTFOLIOS_QUERY = `
    query ListPortfolios {
      listPortfolios {
        id
        name
        url
        versions {
          id
          type
        }
      }
    }
  `;

  const GET_PORTFOLIO_QUERY = `
    query GetPortfolio($id: Float!) {
      getPortfolio(id: $id) {
        id
        name
        url
        versions {
          id
          type
        }
      }
    }
  `;

  const CREATE_PORTFOLIO_MUTATION = `
    mutation CreatePortfolio($name: String!, $url: String!) {
      createPortfolio(name: $name, url: $url) {
        id
        name
        url
      }
    }
  `;

  const UPDATE_PORTFOLIO_MUTATION = `
    mutation UpdatePortfolio($id: Float!, $name: String, $url: String) {
      updatePortfolio(id: $id, name: $name, url: $url) {
        id
        name
        url
      }
    }
  `;

  const DELETE_PORTFOLIO_MUTATION = `
    mutation DeletePortfolio($id: Float!) {
      deletePortfolio(id: $id)
    }
  `;

  let portfolio1: PortfolioEntity;
  let portfolio2: PortfolioEntity;
  let portfolio3: PortfolioEntity;

  beforeAll(async () => {
    portfolio1 = await createPortfolioEntity();
    portfolio2 = await createPortfolioEntity();
    portfolio3 = await createPortfolioEntity();
  });

  test('ListPortfolios: Should return portfolio items', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: LIST_PORTFOLIOS_QUERY,
      variables: {},
    });
    expect(response).toGraphQLResponseData({
      listPortfolios: [
        {
          id: portfolio1.id,
          name: portfolio1.name,
          url: portfolio1.url,
          versions: [{ id: expect.any(Number), type: VERSION_TYPE.DRAFT }],
        },
        {
          id: portfolio2.id,
          name: portfolio2.name,
          url: portfolio2.url,
          versions: [{ id: expect.any(Number), type: VERSION_TYPE.DRAFT }],
        },
        {
          id: portfolio3.id,
          name: portfolio3.name,
          url: portfolio3.url,
          versions: [{ id: expect.any(Number), type: VERSION_TYPE.DRAFT }],
        },
      ],
    });
  });

  test('GetPortfolio: Should return a specific portfolio by ID', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: GET_PORTFOLIO_QUERY,
      variables: { id: portfolio1.id },
    });
    expect(response).toGraphQLResponseData({
      getPortfolio: {
        id: portfolio1.id,
        name: portfolio1.name,
        url: portfolio1.url,
        versions: [{ id: expect.any(Number), type: VERSION_TYPE.DRAFT }],
      },
    });
  });

  test('CreatePortfolio: Should create a new portfolio', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: CREATE_PORTFOLIO_MUTATION,
      variables: { name: 'New Portfolio', url: 'http://newportfolio.com' },
    });
    expect(response).toGraphQLResponseData({
      createPortfolio: {
        id: expect.any(Number),
        name: 'New Portfolio',
        url: 'http://newportfolio.com',
      },
    });
  });

  test('UpdatePortfolio: Should update an existing portfolio', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: UPDATE_PORTFOLIO_MUTATION,
      variables: { id: 1, name: 'Updated Portfolio', url: 'http://updatedportfolio.com' },
    });
    expect(response).toGraphQLResponseData({
      updatePortfolio: {
        id: 1,
        name: 'Updated Portfolio',
        url: 'http://updatedportfolio.com',
      },
    });
  });

  test('DeletePortfolio: Should delete an existing portfolio', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: DELETE_PORTFOLIO_MUTATION,
      variables: { id: portfolio1.id },
    });
    expect(response).toGraphQLResponseData({
      deletePortfolio: true,
    });
  });
});
