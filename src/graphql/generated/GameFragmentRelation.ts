/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameFragmentRelation
// ====================================================

export interface GameFragmentRelation_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GameFragmentRelation_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: GameFragmentRelation_data_attributes_cover_data_attributes | null;
}

export interface GameFragmentRelation_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: GameFragmentRelation_data_attributes_cover_data | null;
}

export interface GameFragmentRelation_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface GameFragmentRelation_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: GameFragmentRelation_data_attributes_developers_data_attributes | null;
}

export interface GameFragmentRelation_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: GameFragmentRelation_data_attributes_developers_data[];
}

export interface GameFragmentRelation_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GameFragmentRelation_data_attributes_cover | null;
  release_date: any | null;
  developers: GameFragmentRelation_data_attributes_developers | null;
  price: number;
}

export interface GameFragmentRelation_data {
  __typename: "GameEntity";
  id: string | null;
  attributes: GameFragmentRelation_data_attributes | null;
}

export interface GameFragmentRelation {
  __typename: "GameRelationResponseCollection";
  data: GameFragmentRelation_data[];
}
