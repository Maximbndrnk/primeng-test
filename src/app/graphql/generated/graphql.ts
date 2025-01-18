import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends Record<string, unknown>, K extends keyof T> = Partial<Record<K, never>>;
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
}

export interface Mutation {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
}

export interface MutationCreateUserArgs {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
}

export interface Query {
  __typename?: 'Query';
  users: User[];
}

export interface User {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
}

export interface UserInput {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
}

export type GetUsersQueryVariables = Exact<Record<string, never>>;

export interface GetUsersQuery {
  __typename?: 'Query';
  users: { __typename?: 'User'; id: string; name: string; email: string }[];
}

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export interface CreateUserMutation {
  __typename?: 'Mutation';
  createUser?: { __typename?: 'User'; id: string; name: string; email: string } | null;
}

export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
  document = GetUsersDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export const CreateUserDocument = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
  document = CreateUserDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
