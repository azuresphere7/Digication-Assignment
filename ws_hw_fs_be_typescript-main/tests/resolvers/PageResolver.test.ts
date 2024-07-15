import PortfolioEntity from '../../src/entities/PortfolioEntity';
import PageEntity from '../../src/entities/PageEntity';

import createApolloServer from '../test_helpers/createApolloServer';
import createPortfolioEntity from '../test_helpers/createPortfolioHelper';
import createPageEntity from '../test_helpers/createPageHelper';

describe('PageResolver', () => {
  const LIST_PAGES_QUERY = `
    query ListPages {
      listPages {
        id
        name
        url
      }
    }
  `;

  const GET_PAGE_QUERY = `
    query GetPage($id: Float!) {
      getPage(id: $id) {
        id
        name
        url
      }
    }
  `;

  const CREATE_PAGE_MUTATION = `
    mutation CreatePage($name: String!, $url: String!, $portfolioId: Float!) {
      createPage(name: $name, url: $url, portfolioId: $portfolioId) {
        id
        name
        url
      }
    }
  `;

  const UPDATE_PAGE_MUTATION = `
    mutation UpdatePage($id: Float!, $name: String, $url: String) {
      updatePage(id: $id, name: $name, url: $url) {
        id
        name
        url
      }
    }
  `;

  const DELETE_PAGE_MUTATION = `
    mutation DeletePage($id: Float!) {
      deletePage(id: $id)
    }
  `;

  let portfolio: PortfolioEntity;
  let page1: PageEntity;
  let page2: PageEntity;

  beforeAll(async () => {
    portfolio = await createPortfolioEntity();
    page1 = await createPageEntity(portfolio.id);
    page2 = await createPageEntity(portfolio.id);
  });

  test('ListPages: Should return page items', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: LIST_PAGES_QUERY,
      variables: {},
    });
    expect(response).toGraphQLResponseData({
      listPages: [
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

  test('GetPage: Should return a specific page by ID', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: GET_PAGE_QUERY,
      variables: { id: page1.id },
    });
    expect(response).toGraphQLResponseData({
      getPage: {
        id: page1.id,
        name: page1.name,
        url: page1.url,
      },
    });
  });

  test('CreatePage: Should create a new page', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: CREATE_PAGE_MUTATION,
      variables: { name: 'New Page', url: 'http://newpage.com', portfolioId: portfolio.id },
    });
    expect(response).toGraphQLResponseData({
      createPage: {
        id: expect.any(Number),
        name: 'New Page',
        url: 'http://newpage.com',
      },
    });
  });

  test('UpdatePage: Should update an existing page', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: UPDATE_PAGE_MUTATION,
      variables: { id: page1.id, name: 'Updated Page', url: 'http://updatedpage.com' },
    });
    expect(response).toGraphQLResponseData({
      updatePage: {
        id: page1.id,
        name: 'Updated Page',
        url: 'http://updatedpage.com',
      },
    });
  });

  test('DeletePage: Should delete an existing page', async () => {
    const server = createApolloServer();
    const response = await server.executeOperation({
      query: DELETE_PAGE_MUTATION,
      variables: { id: page1.id },
    });
    expect(response).toGraphQLResponseData({
      deletePage: true,
    });
  });
});
