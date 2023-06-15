/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateWishlist
// ====================================================

export interface MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_cover_data_attributes | null;
}

export interface MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_cover_data | null;
}

export interface MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_developers_data_attributes | null;
}

export interface MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_developers_data[];
}

export interface MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_cover | null;
  release_date: any | null;
  developers: MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes_developers | null;
  price: number;
}

export interface MutationUpdateWishlist_updateWishlist_data_attributes_games_data {
  __typename: "GameEntity";
  id: string | null;
  attributes: MutationUpdateWishlist_updateWishlist_data_attributes_games_data_attributes | null;
}

export interface MutationUpdateWishlist_updateWishlist_data_attributes_games {
  __typename: "GameRelationResponseCollection";
  data: MutationUpdateWishlist_updateWishlist_data_attributes_games_data[];
}

export interface MutationUpdateWishlist_updateWishlist_data_attributes {
  __typename: "Wishlist";
  games: MutationUpdateWishlist_updateWishlist_data_attributes_games | null;
}

export interface MutationUpdateWishlist_updateWishlist_data {
  __typename: "WishlistEntity";
  id: string | null;
  attributes: MutationUpdateWishlist_updateWishlist_data_attributes | null;
}

export interface MutationUpdateWishlist_updateWishlist {
  __typename: "WishlistEntityResponse";
  data: MutationUpdateWishlist_updateWishlist_data | null;
}

export interface MutationUpdateWishlist {
  updateWishlist: MutationUpdateWishlist_updateWishlist | null;
}

export interface MutationUpdateWishlistVariables {
  id: string;
  data: WishlistInput;
}
