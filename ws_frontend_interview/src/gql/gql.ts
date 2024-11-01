/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "mutation CreatePage($portfolioId: Float!, $url: String!, $name: String!) {\n  createPage(portfolioId: $portfolioId, url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}": types.CreatePageDocument,
    "mutation CreatePortfolio($url: String!, $name: String!) {\n  createPortfolio(url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}": types.CreatePortfolioDocument,
    "mutation CreatePublishedVersion($portfolioId: Float!) {\n  createPublishedVersion(portfolioId: $portfolioId) {\n    id\n    type\n  }\n}": types.CreatePublishedVersionDocument,
    "mutation CreateSnapshotVersion($portfolioId: Float!) {\n  createSnapshotVersion(portfolioId: $portfolioId) {\n    id\n    type\n  }\n}": types.CreateSnapshotVersionDocument,
    "mutation DeletePage($id: Float!) {\n  deletePage(id: $id)\n}": types.DeletePageDocument,
    "mutation DeletePortfolio($id: Float!) {\n  deletePortfolio(id: $id)\n}": types.DeletePortfolioDocument,
    "mutation UpdatePage($id: Float!, $url: String!, $name: String!) {\n  updatePage(id: $id, url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}": types.UpdatePageDocument,
    "mutation UpdatePortfolio($id: Float!, $url: String!, $name: String!) {\n  updatePortfolio(id: $id, url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}": types.UpdatePortfolioDocument,
    "query GetPage($id: Float!) {\n  getPage(id: $id) {\n    id\n    name\n    url\n  }\n}": types.GetPageDocument,
    "query GetPortfolio($id: Float!) {\n  getPortfolio(id: $id) {\n    id\n    name\n    url\n    createdAt\n  }\n}": types.GetPortfolioDocument,
    "query ListPages {\n  listPages {\n    id\n    name\n    url\n  }\n}": types.ListPagesDocument,
    "query ListPagesByVersion($versionId: Float!) {\n  listPagesByVersion(versionId: $versionId) {\n    id\n    name\n    url\n  }\n}": types.ListPagesByVersionDocument,
    "query ListPortfolioVersions($portfolioId: Float!) {\n  listPortfolioVersions(portfolioId: $portfolioId) {\n    id\n    type\n    createdAt\n  }\n}": types.ListPortfolioVersionsDocument,
    "query ListPortfolios {\n  listPortfolios {\n    id\n    name\n    url\n    createdAt\n  }\n}": types.ListPortfoliosDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePage($portfolioId: Float!, $url: String!, $name: String!) {\n  createPage(portfolioId: $portfolioId, url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}"): (typeof documents)["mutation CreatePage($portfolioId: Float!, $url: String!, $name: String!) {\n  createPage(portfolioId: $portfolioId, url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePortfolio($url: String!, $name: String!) {\n  createPortfolio(url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}"): (typeof documents)["mutation CreatePortfolio($url: String!, $name: String!) {\n  createPortfolio(url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePublishedVersion($portfolioId: Float!) {\n  createPublishedVersion(portfolioId: $portfolioId) {\n    id\n    type\n  }\n}"): (typeof documents)["mutation CreatePublishedVersion($portfolioId: Float!) {\n  createPublishedVersion(portfolioId: $portfolioId) {\n    id\n    type\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateSnapshotVersion($portfolioId: Float!) {\n  createSnapshotVersion(portfolioId: $portfolioId) {\n    id\n    type\n  }\n}"): (typeof documents)["mutation CreateSnapshotVersion($portfolioId: Float!) {\n  createSnapshotVersion(portfolioId: $portfolioId) {\n    id\n    type\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeletePage($id: Float!) {\n  deletePage(id: $id)\n}"): (typeof documents)["mutation DeletePage($id: Float!) {\n  deletePage(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeletePortfolio($id: Float!) {\n  deletePortfolio(id: $id)\n}"): (typeof documents)["mutation DeletePortfolio($id: Float!) {\n  deletePortfolio(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdatePage($id: Float!, $url: String!, $name: String!) {\n  updatePage(id: $id, url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}"): (typeof documents)["mutation UpdatePage($id: Float!, $url: String!, $name: String!) {\n  updatePage(id: $id, url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdatePortfolio($id: Float!, $url: String!, $name: String!) {\n  updatePortfolio(id: $id, url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}"): (typeof documents)["mutation UpdatePortfolio($id: Float!, $url: String!, $name: String!) {\n  updatePortfolio(id: $id, url: $url, name: $name) {\n    id\n    name\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPage($id: Float!) {\n  getPage(id: $id) {\n    id\n    name\n    url\n  }\n}"): (typeof documents)["query GetPage($id: Float!) {\n  getPage(id: $id) {\n    id\n    name\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPortfolio($id: Float!) {\n  getPortfolio(id: $id) {\n    id\n    name\n    url\n    createdAt\n  }\n}"): (typeof documents)["query GetPortfolio($id: Float!) {\n  getPortfolio(id: $id) {\n    id\n    name\n    url\n    createdAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ListPages {\n  listPages {\n    id\n    name\n    url\n  }\n}"): (typeof documents)["query ListPages {\n  listPages {\n    id\n    name\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ListPagesByVersion($versionId: Float!) {\n  listPagesByVersion(versionId: $versionId) {\n    id\n    name\n    url\n  }\n}"): (typeof documents)["query ListPagesByVersion($versionId: Float!) {\n  listPagesByVersion(versionId: $versionId) {\n    id\n    name\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ListPortfolioVersions($portfolioId: Float!) {\n  listPortfolioVersions(portfolioId: $portfolioId) {\n    id\n    type\n    createdAt\n  }\n}"): (typeof documents)["query ListPortfolioVersions($portfolioId: Float!) {\n  listPortfolioVersions(portfolioId: $portfolioId) {\n    id\n    type\n    createdAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ListPortfolios {\n  listPortfolios {\n    id\n    name\n    url\n    createdAt\n  }\n}"): (typeof documents)["query ListPortfolios {\n  listPortfolios {\n    id\n    name\n    url\n    createdAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;