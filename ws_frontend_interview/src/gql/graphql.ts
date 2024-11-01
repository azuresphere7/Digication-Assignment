/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new page */
  createPage: Page;
  /** Create a new portfolio */
  createPortfolio: Portfolio;
  /** Move pages in a draft version into published version */
  createPublishedVersion: PortfolioVersion;
  /** Create a snapshot version from the draft version */
  createSnapshotVersion: PortfolioVersion;
  /** Delete a page */
  deletePage: Scalars['Boolean']['output'];
  /** Delete a portfolio */
  deletePortfolio: Scalars['Boolean']['output'];
  /** Update a page */
  updatePage?: Maybe<Page>;
  /** Update a portfolio */
  updatePortfolio?: Maybe<Portfolio>;
};


export type MutationCreatePageArgs = {
  name: Scalars['String']['input'];
  portfolioId: Scalars['Float']['input'];
  url: Scalars['String']['input'];
};


export type MutationCreatePortfolioArgs = {
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type MutationCreatePublishedVersionArgs = {
  portfolioId: Scalars['Float']['input'];
};


export type MutationCreateSnapshotVersionArgs = {
  portfolioId: Scalars['Float']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeletePortfolioArgs = {
  id: Scalars['Float']['input'];
};


export type MutationUpdatePageArgs = {
  id: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdatePortfolioArgs = {
  id: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Portfolio = {
  __typename?: 'Portfolio';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
  versions: Array<PortfolioVersion>;
};

export type PortfolioVersion = {
  __typename?: 'PortfolioVersion';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  pages: Array<Page>;
  type: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Get a page by ID */
  getPage?: Maybe<Page>;
  /** Get a portfolio by ID */
  getPortfolio?: Maybe<Portfolio>;
  /** List all pages */
  listPages: Array<Page>;
  /** List all pages of a version */
  listPagesByVersion: Array<Page>;
  /** List all versions of a portfolio */
  listPortfolioVersions: Array<PortfolioVersion>;
  /** List all portfolios */
  listPortfolios: Array<Portfolio>;
};


export type QueryGetPageArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetPortfolioArgs = {
  id: Scalars['Float']['input'];
};


export type QueryListPagesByVersionArgs = {
  versionId: Scalars['Float']['input'];
};


export type QueryListPortfolioVersionsArgs = {
  portfolioId: Scalars['Float']['input'];
};

export type CreatePageMutationVariables = Exact<{
  portfolioId: Scalars['Float']['input'];
  url: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type CreatePageMutation = { __typename?: 'Mutation', createPage: { __typename?: 'Page', id: number, name: string, url: string } };

export type CreatePortfolioMutationVariables = Exact<{
  url: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type CreatePortfolioMutation = { __typename?: 'Mutation', createPortfolio: { __typename?: 'Portfolio', id: number, name: string, url: string } };

export type CreatePublishedVersionMutationVariables = Exact<{
  portfolioId: Scalars['Float']['input'];
}>;


export type CreatePublishedVersionMutation = { __typename?: 'Mutation', createPublishedVersion: { __typename?: 'PortfolioVersion', id: number, type: string } };

export type CreateSnapshotVersionMutationVariables = Exact<{
  portfolioId: Scalars['Float']['input'];
}>;


export type CreateSnapshotVersionMutation = { __typename?: 'Mutation', createSnapshotVersion: { __typename?: 'PortfolioVersion', id: number, type: string } };

export type DeletePageMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeletePageMutation = { __typename?: 'Mutation', deletePage: boolean };

export type DeletePortfolioMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeletePortfolioMutation = { __typename?: 'Mutation', deletePortfolio: boolean };

export type UpdatePageMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  url: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdatePageMutation = { __typename?: 'Mutation', updatePage?: { __typename?: 'Page', id: number, name: string, url: string } | null };

export type UpdatePortfolioMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  url: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdatePortfolioMutation = { __typename?: 'Mutation', updatePortfolio?: { __typename?: 'Portfolio', id: number, name: string, url: string } | null };

export type GetPageQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetPageQuery = { __typename?: 'Query', getPage?: { __typename?: 'Page', id: number, name: string, url: string } | null };

export type GetPortfolioQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetPortfolioQuery = { __typename?: 'Query', getPortfolio?: { __typename?: 'Portfolio', id: number, name: string, url: string, createdAt: any } | null };

export type ListPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPagesQuery = { __typename?: 'Query', listPages: Array<{ __typename?: 'Page', id: number, name: string, url: string }> };

export type ListPagesByVersionQueryVariables = Exact<{
  versionId: Scalars['Float']['input'];
}>;


export type ListPagesByVersionQuery = { __typename?: 'Query', listPagesByVersion: Array<{ __typename?: 'Page', id: number, name: string, url: string }> };

export type ListPortfolioVersionsQueryVariables = Exact<{
  portfolioId: Scalars['Float']['input'];
}>;


export type ListPortfolioVersionsQuery = { __typename?: 'Query', listPortfolioVersions: Array<{ __typename?: 'PortfolioVersion', id: number, type: string, createdAt: any }> };

export type ListPortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPortfoliosQuery = { __typename?: 'Query', listPortfolios: Array<{ __typename?: 'Portfolio', id: number, name: string, url: string, createdAt: any }> };


export const CreatePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"portfolioId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreatePageMutation, CreatePageMutationVariables>;
export const CreatePortfolioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePortfolio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPortfolio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreatePortfolioMutation, CreatePortfolioMutationVariables>;
export const CreatePublishedVersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePublishedVersion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPublishedVersion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"portfolioId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreatePublishedVersionMutation, CreatePublishedVersionMutationVariables>;
export const CreateSnapshotVersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSnapshotVersion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSnapshotVersion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"portfolioId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateSnapshotVersionMutation, CreateSnapshotVersionMutationVariables>;
export const DeletePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePageMutation, DeletePageMutationVariables>;
export const DeletePortfolioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePortfolio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePortfolio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePortfolioMutation, DeletePortfolioMutationVariables>;
export const UpdatePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<UpdatePageMutation, UpdatePageMutationVariables>;
export const UpdatePortfolioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePortfolio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePortfolio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<UpdatePortfolioMutation, UpdatePortfolioMutationVariables>;
export const GetPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetPageQuery, GetPageQueryVariables>;
export const GetPortfolioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPortfolio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPortfolio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetPortfolioQuery, GetPortfolioQueryVariables>;
export const ListPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<ListPagesQuery, ListPagesQueryVariables>;
export const ListPagesByVersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPagesByVersion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"versionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPagesByVersion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"versionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"versionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<ListPagesByVersionQuery, ListPagesByVersionQueryVariables>;
export const ListPortfolioVersionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPortfolioVersions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPortfolioVersions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"portfolioId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ListPortfolioVersionsQuery, ListPortfolioVersionsQueryVariables>;
export const ListPortfoliosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPortfolios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPortfolios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ListPortfoliosQuery, ListPortfoliosQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new page */
  createPage: Page;
  /** Create a new portfolio */
  createPortfolio: Portfolio;
  /** Move pages in a draft version into published version */
  createPublishedVersion: PortfolioVersion;
  /** Create a snapshot version from the draft version */
  createSnapshotVersion: PortfolioVersion;
  /** Delete a page */
  deletePage: Scalars['Boolean']['output'];
  /** Delete a portfolio */
  deletePortfolio: Scalars['Boolean']['output'];
  /** Update a page */
  updatePage?: Maybe<Page>;
  /** Update a portfolio */
  updatePortfolio?: Maybe<Portfolio>;
};


export type MutationCreatePageArgs = {
  name: Scalars['String']['input'];
  portfolioId: Scalars['Float']['input'];
  url: Scalars['String']['input'];
};


export type MutationCreatePortfolioArgs = {
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type MutationCreatePublishedVersionArgs = {
  portfolioId: Scalars['Float']['input'];
};


export type MutationCreateSnapshotVersionArgs = {
  portfolioId: Scalars['Float']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeletePortfolioArgs = {
  id: Scalars['Float']['input'];
};


export type MutationUpdatePageArgs = {
  id: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdatePortfolioArgs = {
  id: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Portfolio = {
  __typename?: 'Portfolio';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
  versions: Array<PortfolioVersion>;
};

export type PortfolioVersion = {
  __typename?: 'PortfolioVersion';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  pages: Array<Page>;
  type: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Get a page by ID */
  getPage?: Maybe<Page>;
  /** Get a portfolio by ID */
  getPortfolio?: Maybe<Portfolio>;
  /** List all pages */
  listPages: Array<Page>;
  /** List all pages of a version */
  listPagesByVersion: Array<Page>;
  /** List all versions of a portfolio */
  listPortfolioVersions: Array<PortfolioVersion>;
  /** List all portfolios */
  listPortfolios: Array<Portfolio>;
};


export type QueryGetPageArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetPortfolioArgs = {
  id: Scalars['Float']['input'];
};


export type QueryListPagesByVersionArgs = {
  versionId: Scalars['Float']['input'];
};


export type QueryListPortfolioVersionsArgs = {
  portfolioId: Scalars['Float']['input'];
};

export type CreatePageMutationVariables = Exact<{
  portfolioId: Scalars['Float']['input'];
  url: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type CreatePageMutation = { __typename?: 'Mutation', createPage: { __typename?: 'Page', id: number, name: string, url: string } };

export type CreatePortfolioMutationVariables = Exact<{
  url: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type CreatePortfolioMutation = { __typename?: 'Mutation', createPortfolio: { __typename?: 'Portfolio', id: number, name: string, url: string } };

export type CreatePublishedVersionMutationVariables = Exact<{
  portfolioId: Scalars['Float']['input'];
}>;


export type CreatePublishedVersionMutation = { __typename?: 'Mutation', createPublishedVersion: { __typename?: 'PortfolioVersion', id: number, type: string } };

export type CreateSnapshotVersionMutationVariables = Exact<{
  portfolioId: Scalars['Float']['input'];
}>;


export type CreateSnapshotVersionMutation = { __typename?: 'Mutation', createSnapshotVersion: { __typename?: 'PortfolioVersion', id: number, type: string } };

export type DeletePageMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeletePageMutation = { __typename?: 'Mutation', deletePage: boolean };

export type DeletePortfolioMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeletePortfolioMutation = { __typename?: 'Mutation', deletePortfolio: boolean };

export type UpdatePageMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  url: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdatePageMutation = { __typename?: 'Mutation', updatePage?: { __typename?: 'Page', id: number, name: string, url: string } | null };

export type UpdatePortfolioMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  url: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdatePortfolioMutation = { __typename?: 'Mutation', updatePortfolio?: { __typename?: 'Portfolio', id: number, name: string, url: string } | null };

export type GetPageQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetPageQuery = { __typename?: 'Query', getPage?: { __typename?: 'Page', id: number, name: string, url: string } | null };

export type GetPortfolioQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetPortfolioQuery = { __typename?: 'Query', getPortfolio?: { __typename?: 'Portfolio', id: number, name: string, url: string, createdAt: any } | null };

export type ListPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPagesQuery = { __typename?: 'Query', listPages: Array<{ __typename?: 'Page', id: number, name: string, url: string }> };

export type ListPagesByVersionQueryVariables = Exact<{
  versionId: Scalars['Float']['input'];
}>;


export type ListPagesByVersionQuery = { __typename?: 'Query', listPagesByVersion: Array<{ __typename?: 'Page', id: number, name: string, url: string }> };

export type ListPortfolioVersionsQueryVariables = Exact<{
  portfolioId: Scalars['Float']['input'];
}>;


export type ListPortfolioVersionsQuery = { __typename?: 'Query', listPortfolioVersions: Array<{ __typename?: 'PortfolioVersion', id: number, type: string, createdAt: any }> };

export type ListPortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPortfoliosQuery = { __typename?: 'Query', listPortfolios: Array<{ __typename?: 'Portfolio', id: number, name: string, url: string, createdAt: any }> };


export const CreatePageDocument = gql`
    mutation CreatePage($portfolioId: Float!, $url: String!, $name: String!) {
  createPage(portfolioId: $portfolioId, url: $url, name: $name) {
    id
    name
    url
  }
}
    `;
export type CreatePageMutationFn = Apollo.MutationFunction<CreatePageMutation, CreatePageMutationVariables>;

/**
 * __useCreatePageMutation__
 *
 * To run a mutation, you first call `useCreatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPageMutation, { data, loading, error }] = useCreatePageMutation({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *      url: // value for 'url'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreatePageMutation(baseOptions?: Apollo.MutationHookOptions<CreatePageMutation, CreatePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePageMutation, CreatePageMutationVariables>(CreatePageDocument, options);
      }
export type CreatePageMutationHookResult = ReturnType<typeof useCreatePageMutation>;
export type CreatePageMutationResult = Apollo.MutationResult<CreatePageMutation>;
export type CreatePageMutationOptions = Apollo.BaseMutationOptions<CreatePageMutation, CreatePageMutationVariables>;
export const CreatePortfolioDocument = gql`
    mutation CreatePortfolio($url: String!, $name: String!) {
  createPortfolio(url: $url, name: $name) {
    id
    name
    url
  }
}
    `;
export type CreatePortfolioMutationFn = Apollo.MutationFunction<CreatePortfolioMutation, CreatePortfolioMutationVariables>;

/**
 * __useCreatePortfolioMutation__
 *
 * To run a mutation, you first call `useCreatePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPortfolioMutation, { data, loading, error }] = useCreatePortfolioMutation({
 *   variables: {
 *      url: // value for 'url'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreatePortfolioMutation(baseOptions?: Apollo.MutationHookOptions<CreatePortfolioMutation, CreatePortfolioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePortfolioMutation, CreatePortfolioMutationVariables>(CreatePortfolioDocument, options);
      }
export type CreatePortfolioMutationHookResult = ReturnType<typeof useCreatePortfolioMutation>;
export type CreatePortfolioMutationResult = Apollo.MutationResult<CreatePortfolioMutation>;
export type CreatePortfolioMutationOptions = Apollo.BaseMutationOptions<CreatePortfolioMutation, CreatePortfolioMutationVariables>;
export const CreatePublishedVersionDocument = gql`
    mutation CreatePublishedVersion($portfolioId: Float!) {
  createPublishedVersion(portfolioId: $portfolioId) {
    id
    type
  }
}
    `;
export type CreatePublishedVersionMutationFn = Apollo.MutationFunction<CreatePublishedVersionMutation, CreatePublishedVersionMutationVariables>;

/**
 * __useCreatePublishedVersionMutation__
 *
 * To run a mutation, you first call `useCreatePublishedVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePublishedVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPublishedVersionMutation, { data, loading, error }] = useCreatePublishedVersionMutation({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useCreatePublishedVersionMutation(baseOptions?: Apollo.MutationHookOptions<CreatePublishedVersionMutation, CreatePublishedVersionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePublishedVersionMutation, CreatePublishedVersionMutationVariables>(CreatePublishedVersionDocument, options);
      }
export type CreatePublishedVersionMutationHookResult = ReturnType<typeof useCreatePublishedVersionMutation>;
export type CreatePublishedVersionMutationResult = Apollo.MutationResult<CreatePublishedVersionMutation>;
export type CreatePublishedVersionMutationOptions = Apollo.BaseMutationOptions<CreatePublishedVersionMutation, CreatePublishedVersionMutationVariables>;
export const CreateSnapshotVersionDocument = gql`
    mutation CreateSnapshotVersion($portfolioId: Float!) {
  createSnapshotVersion(portfolioId: $portfolioId) {
    id
    type
  }
}
    `;
export type CreateSnapshotVersionMutationFn = Apollo.MutationFunction<CreateSnapshotVersionMutation, CreateSnapshotVersionMutationVariables>;

/**
 * __useCreateSnapshotVersionMutation__
 *
 * To run a mutation, you first call `useCreateSnapshotVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSnapshotVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSnapshotVersionMutation, { data, loading, error }] = useCreateSnapshotVersionMutation({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useCreateSnapshotVersionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSnapshotVersionMutation, CreateSnapshotVersionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSnapshotVersionMutation, CreateSnapshotVersionMutationVariables>(CreateSnapshotVersionDocument, options);
      }
export type CreateSnapshotVersionMutationHookResult = ReturnType<typeof useCreateSnapshotVersionMutation>;
export type CreateSnapshotVersionMutationResult = Apollo.MutationResult<CreateSnapshotVersionMutation>;
export type CreateSnapshotVersionMutationOptions = Apollo.BaseMutationOptions<CreateSnapshotVersionMutation, CreateSnapshotVersionMutationVariables>;
export const DeletePageDocument = gql`
    mutation DeletePage($id: Float!) {
  deletePage(id: $id)
}
    `;
export type DeletePageMutationFn = Apollo.MutationFunction<DeletePageMutation, DeletePageMutationVariables>;

/**
 * __useDeletePageMutation__
 *
 * To run a mutation, you first call `useDeletePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePageMutation, { data, loading, error }] = useDeletePageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePageMutation(baseOptions?: Apollo.MutationHookOptions<DeletePageMutation, DeletePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePageMutation, DeletePageMutationVariables>(DeletePageDocument, options);
      }
export type DeletePageMutationHookResult = ReturnType<typeof useDeletePageMutation>;
export type DeletePageMutationResult = Apollo.MutationResult<DeletePageMutation>;
export type DeletePageMutationOptions = Apollo.BaseMutationOptions<DeletePageMutation, DeletePageMutationVariables>;
export const DeletePortfolioDocument = gql`
    mutation DeletePortfolio($id: Float!) {
  deletePortfolio(id: $id)
}
    `;
export type DeletePortfolioMutationFn = Apollo.MutationFunction<DeletePortfolioMutation, DeletePortfolioMutationVariables>;

/**
 * __useDeletePortfolioMutation__
 *
 * To run a mutation, you first call `useDeletePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePortfolioMutation, { data, loading, error }] = useDeletePortfolioMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePortfolioMutation(baseOptions?: Apollo.MutationHookOptions<DeletePortfolioMutation, DeletePortfolioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePortfolioMutation, DeletePortfolioMutationVariables>(DeletePortfolioDocument, options);
      }
export type DeletePortfolioMutationHookResult = ReturnType<typeof useDeletePortfolioMutation>;
export type DeletePortfolioMutationResult = Apollo.MutationResult<DeletePortfolioMutation>;
export type DeletePortfolioMutationOptions = Apollo.BaseMutationOptions<DeletePortfolioMutation, DeletePortfolioMutationVariables>;
export const UpdatePageDocument = gql`
    mutation UpdatePage($id: Float!, $url: String!, $name: String!) {
  updatePage(id: $id, url: $url, name: $name) {
    id
    name
    url
  }
}
    `;
export type UpdatePageMutationFn = Apollo.MutationFunction<UpdatePageMutation, UpdatePageMutationVariables>;

/**
 * __useUpdatePageMutation__
 *
 * To run a mutation, you first call `useUpdatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageMutation, { data, loading, error }] = useUpdatePageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      url: // value for 'url'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdatePageMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePageMutation, UpdatePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePageMutation, UpdatePageMutationVariables>(UpdatePageDocument, options);
      }
export type UpdatePageMutationHookResult = ReturnType<typeof useUpdatePageMutation>;
export type UpdatePageMutationResult = Apollo.MutationResult<UpdatePageMutation>;
export type UpdatePageMutationOptions = Apollo.BaseMutationOptions<UpdatePageMutation, UpdatePageMutationVariables>;
export const UpdatePortfolioDocument = gql`
    mutation UpdatePortfolio($id: Float!, $url: String!, $name: String!) {
  updatePortfolio(id: $id, url: $url, name: $name) {
    id
    name
    url
  }
}
    `;
export type UpdatePortfolioMutationFn = Apollo.MutationFunction<UpdatePortfolioMutation, UpdatePortfolioMutationVariables>;

/**
 * __useUpdatePortfolioMutation__
 *
 * To run a mutation, you first call `useUpdatePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePortfolioMutation, { data, loading, error }] = useUpdatePortfolioMutation({
 *   variables: {
 *      id: // value for 'id'
 *      url: // value for 'url'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdatePortfolioMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePortfolioMutation, UpdatePortfolioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePortfolioMutation, UpdatePortfolioMutationVariables>(UpdatePortfolioDocument, options);
      }
export type UpdatePortfolioMutationHookResult = ReturnType<typeof useUpdatePortfolioMutation>;
export type UpdatePortfolioMutationResult = Apollo.MutationResult<UpdatePortfolioMutation>;
export type UpdatePortfolioMutationOptions = Apollo.BaseMutationOptions<UpdatePortfolioMutation, UpdatePortfolioMutationVariables>;
export const GetPageDocument = gql`
    query GetPage($id: Float!) {
  getPage(id: $id) {
    id
    name
    url
  }
}
    `;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPageQuery(baseOptions: Apollo.QueryHookOptions<GetPageQuery, GetPageQueryVariables> & ({ variables: GetPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, options);
      }
export function useGetPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, options);
        }
export function useGetPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, options);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageSuspenseQueryHookResult = ReturnType<typeof useGetPageSuspenseQuery>;
export type GetPageQueryResult = Apollo.QueryResult<GetPageQuery, GetPageQueryVariables>;
export const GetPortfolioDocument = gql`
    query GetPortfolio($id: Float!) {
  getPortfolio(id: $id) {
    id
    name
    url
    createdAt
  }
}
    `;

/**
 * __useGetPortfolioQuery__
 *
 * To run a query within a React component, call `useGetPortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortfolioQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortfolioQuery(baseOptions: Apollo.QueryHookOptions<GetPortfolioQuery, GetPortfolioQueryVariables> & ({ variables: GetPortfolioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPortfolioQuery, GetPortfolioQueryVariables>(GetPortfolioDocument, options);
      }
export function useGetPortfolioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPortfolioQuery, GetPortfolioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPortfolioQuery, GetPortfolioQueryVariables>(GetPortfolioDocument, options);
        }
export function useGetPortfolioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPortfolioQuery, GetPortfolioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPortfolioQuery, GetPortfolioQueryVariables>(GetPortfolioDocument, options);
        }
export type GetPortfolioQueryHookResult = ReturnType<typeof useGetPortfolioQuery>;
export type GetPortfolioLazyQueryHookResult = ReturnType<typeof useGetPortfolioLazyQuery>;
export type GetPortfolioSuspenseQueryHookResult = ReturnType<typeof useGetPortfolioSuspenseQuery>;
export type GetPortfolioQueryResult = Apollo.QueryResult<GetPortfolioQuery, GetPortfolioQueryVariables>;
export const ListPagesDocument = gql`
    query ListPages {
  listPages {
    id
    name
    url
  }
}
    `;

/**
 * __useListPagesQuery__
 *
 * To run a query within a React component, call `useListPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPagesQuery(baseOptions?: Apollo.QueryHookOptions<ListPagesQuery, ListPagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPagesQuery, ListPagesQueryVariables>(ListPagesDocument, options);
      }
export function useListPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPagesQuery, ListPagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPagesQuery, ListPagesQueryVariables>(ListPagesDocument, options);
        }
export function useListPagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListPagesQuery, ListPagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListPagesQuery, ListPagesQueryVariables>(ListPagesDocument, options);
        }
export type ListPagesQueryHookResult = ReturnType<typeof useListPagesQuery>;
export type ListPagesLazyQueryHookResult = ReturnType<typeof useListPagesLazyQuery>;
export type ListPagesSuspenseQueryHookResult = ReturnType<typeof useListPagesSuspenseQuery>;
export type ListPagesQueryResult = Apollo.QueryResult<ListPagesQuery, ListPagesQueryVariables>;
export const ListPagesByVersionDocument = gql`
    query ListPagesByVersion($versionId: Float!) {
  listPagesByVersion(versionId: $versionId) {
    id
    name
    url
  }
}
    `;

/**
 * __useListPagesByVersionQuery__
 *
 * To run a query within a React component, call `useListPagesByVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPagesByVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPagesByVersionQuery({
 *   variables: {
 *      versionId: // value for 'versionId'
 *   },
 * });
 */
export function useListPagesByVersionQuery(baseOptions: Apollo.QueryHookOptions<ListPagesByVersionQuery, ListPagesByVersionQueryVariables> & ({ variables: ListPagesByVersionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPagesByVersionQuery, ListPagesByVersionQueryVariables>(ListPagesByVersionDocument, options);
      }
export function useListPagesByVersionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPagesByVersionQuery, ListPagesByVersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPagesByVersionQuery, ListPagesByVersionQueryVariables>(ListPagesByVersionDocument, options);
        }
export function useListPagesByVersionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListPagesByVersionQuery, ListPagesByVersionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListPagesByVersionQuery, ListPagesByVersionQueryVariables>(ListPagesByVersionDocument, options);
        }
export type ListPagesByVersionQueryHookResult = ReturnType<typeof useListPagesByVersionQuery>;
export type ListPagesByVersionLazyQueryHookResult = ReturnType<typeof useListPagesByVersionLazyQuery>;
export type ListPagesByVersionSuspenseQueryHookResult = ReturnType<typeof useListPagesByVersionSuspenseQuery>;
export type ListPagesByVersionQueryResult = Apollo.QueryResult<ListPagesByVersionQuery, ListPagesByVersionQueryVariables>;
export const ListPortfolioVersionsDocument = gql`
    query ListPortfolioVersions($portfolioId: Float!) {
  listPortfolioVersions(portfolioId: $portfolioId) {
    id
    type
    createdAt
  }
}
    `;

/**
 * __useListPortfolioVersionsQuery__
 *
 * To run a query within a React component, call `useListPortfolioVersionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPortfolioVersionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPortfolioVersionsQuery({
 *   variables: {
 *      portfolioId: // value for 'portfolioId'
 *   },
 * });
 */
export function useListPortfolioVersionsQuery(baseOptions: Apollo.QueryHookOptions<ListPortfolioVersionsQuery, ListPortfolioVersionsQueryVariables> & ({ variables: ListPortfolioVersionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPortfolioVersionsQuery, ListPortfolioVersionsQueryVariables>(ListPortfolioVersionsDocument, options);
      }
export function useListPortfolioVersionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPortfolioVersionsQuery, ListPortfolioVersionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPortfolioVersionsQuery, ListPortfolioVersionsQueryVariables>(ListPortfolioVersionsDocument, options);
        }
export function useListPortfolioVersionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListPortfolioVersionsQuery, ListPortfolioVersionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListPortfolioVersionsQuery, ListPortfolioVersionsQueryVariables>(ListPortfolioVersionsDocument, options);
        }
export type ListPortfolioVersionsQueryHookResult = ReturnType<typeof useListPortfolioVersionsQuery>;
export type ListPortfolioVersionsLazyQueryHookResult = ReturnType<typeof useListPortfolioVersionsLazyQuery>;
export type ListPortfolioVersionsSuspenseQueryHookResult = ReturnType<typeof useListPortfolioVersionsSuspenseQuery>;
export type ListPortfolioVersionsQueryResult = Apollo.QueryResult<ListPortfolioVersionsQuery, ListPortfolioVersionsQueryVariables>;
export const ListPortfoliosDocument = gql`
    query ListPortfolios {
  listPortfolios {
    id
    name
    url
    createdAt
  }
}
    `;

/**
 * __useListPortfoliosQuery__
 *
 * To run a query within a React component, call `useListPortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPortfoliosQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPortfoliosQuery(baseOptions?: Apollo.QueryHookOptions<ListPortfoliosQuery, ListPortfoliosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPortfoliosQuery, ListPortfoliosQueryVariables>(ListPortfoliosDocument, options);
      }
export function useListPortfoliosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPortfoliosQuery, ListPortfoliosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPortfoliosQuery, ListPortfoliosQueryVariables>(ListPortfoliosDocument, options);
        }
export function useListPortfoliosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListPortfoliosQuery, ListPortfoliosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListPortfoliosQuery, ListPortfoliosQueryVariables>(ListPortfoliosDocument, options);
        }
export type ListPortfoliosQueryHookResult = ReturnType<typeof useListPortfoliosQuery>;
export type ListPortfoliosLazyQueryHookResult = ReturnType<typeof useListPortfoliosLazyQuery>;
export type ListPortfoliosSuspenseQueryHookResult = ReturnType<typeof useListPortfoliosSuspenseQuery>;
export type ListPortfoliosQueryResult = Apollo.QueryResult<ListPortfoliosQuery, ListPortfoliosQueryVariables>;