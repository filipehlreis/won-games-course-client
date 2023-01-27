/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryGamesBySlug
// ====================================================

export interface QueryGamesBySlug_games_data_attributes_gallery_data_attributes {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryGamesBySlug_games_data_attributes_gallery_data {
  __typename: "UploadFileEntity";
  attributes: QueryGamesBySlug_games_data_attributes_gallery_data_attributes | null;
}

export interface QueryGamesBySlug_games_data_attributes_gallery {
  __typename: "UploadFileRelationResponseCollection";
  data: QueryGamesBySlug_games_data_attributes_gallery_data[];
}

export interface QueryGamesBySlug_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  src: string;
}

export interface QueryGamesBySlug_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryGamesBySlug_games_data_attributes_cover_data_attributes | null;
}

export interface QueryGamesBySlug_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryGamesBySlug_games_data_attributes_cover_data | null;
}

export interface QueryGamesBySlug_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryGamesBySlug_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryGamesBySlug_games_data_attributes_developers_data_attributes | null;
}

export interface QueryGamesBySlug_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryGamesBySlug_games_data_attributes_developers_data[];
}

export interface QueryGamesBySlug_games_data_attributes_publisher_data_attributes {
  __typename: "Publisher";
  name: string;
}

export interface QueryGamesBySlug_games_data_attributes_publisher_data {
  __typename: "PublisherEntity";
  attributes: QueryGamesBySlug_games_data_attributes_publisher_data_attributes | null;
}

export interface QueryGamesBySlug_games_data_attributes_publisher {
  __typename: "PublisherEntityResponse";
  data: QueryGamesBySlug_games_data_attributes_publisher_data | null;
}

export interface QueryGamesBySlug_games_data_attributes_categories_data_attributes {
  __typename: "Category";
  name: string;
}

export interface QueryGamesBySlug_games_data_attributes_categories_data {
  __typename: "CategoryEntity";
  attributes: QueryGamesBySlug_games_data_attributes_categories_data_attributes | null;
}

export interface QueryGamesBySlug_games_data_attributes_categories {
  __typename: "CategoryRelationResponseCollection";
  data: QueryGamesBySlug_games_data_attributes_categories_data[];
}

export interface QueryGamesBySlug_games_data_attributes_platforms_data_attributes {
  __typename: "Platform";
  name: string;
}

export interface QueryGamesBySlug_games_data_attributes_platforms_data {
  __typename: "PlatformEntity";
  attributes: QueryGamesBySlug_games_data_attributes_platforms_data_attributes | null;
}

export interface QueryGamesBySlug_games_data_attributes_platforms {
  __typename: "PlatformRelationResponseCollection";
  data: QueryGamesBySlug_games_data_attributes_platforms_data[];
}

export interface QueryGamesBySlug_games_data_attributes {
  __typename: "Game";
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING | null;
  release_date: any | null;
  gallery: QueryGamesBySlug_games_data_attributes_gallery | null;
  cover: QueryGamesBySlug_games_data_attributes_cover | null;
  developers: QueryGamesBySlug_games_data_attributes_developers | null;
  publisher: QueryGamesBySlug_games_data_attributes_publisher | null;
  categories: QueryGamesBySlug_games_data_attributes_categories | null;
  platforms: QueryGamesBySlug_games_data_attributes_platforms | null;
}

export interface QueryGamesBySlug_games_data {
  __typename: "GameEntity";
  id: string | null;
  attributes: QueryGamesBySlug_games_data_attributes | null;
}

export interface QueryGamesBySlug_games {
  __typename: "GameEntityResponseCollection";
  data: QueryGamesBySlug_games_data[];
}

export interface QueryGamesBySlug {
  games: QueryGamesBySlug_games | null;
}

export interface QueryGamesBySlugVariables {
  slug: string;
}
