/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameFragment
// ====================================================

export interface GameFragment_meta_pagination {
  __typename: "Pagination";
  total: number;
}

export interface GameFragment_meta {
  __typename: "ResponseCollectionMeta";
  pagination: GameFragment_meta_pagination;
}

export interface GameFragment_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GameFragment_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: GameFragment_data_attributes_cover_data_attributes | null;
}

export interface GameFragment_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: GameFragment_data_attributes_cover_data | null;
}

export interface GameFragment_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface GameFragment_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: GameFragment_data_attributes_developers_data_attributes | null;
}

export interface GameFragment_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: GameFragment_data_attributes_developers_data[];
}

export interface GameFragment_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GameFragment_data_attributes_cover | null;
  release_date: any | null;
  developers: GameFragment_data_attributes_developers | null;
  price: number;
}

export interface GameFragment_data {
  __typename: "GameEntity";
  id: string | null;
  attributes: GameFragment_data_attributes | null;
}

export interface GameFragment {
  __typename: "GameEntityResponseCollection";
  meta: GameFragment_meta;
  data: GameFragment_data[];
}
