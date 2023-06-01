/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishlist
// ====================================================

export interface QueryWishlist_wishlists_data_attributes_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryWishlist_wishlists_data_attributes_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryWishlist_wishlists_data_attributes_games_data_attributes_cover_data_attributes | null;
}

export interface QueryWishlist_wishlists_data_attributes_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryWishlist_wishlists_data_attributes_games_data_attributes_cover_data | null;
}

export interface QueryWishlist_wishlists_data_attributes_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryWishlist_wishlists_data_attributes_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryWishlist_wishlists_data_attributes_games_data_attributes_developers_data_attributes | null;
}

export interface QueryWishlist_wishlists_data_attributes_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryWishlist_wishlists_data_attributes_games_data_attributes_developers_data[];
}

export interface QueryWishlist_wishlists_data_attributes_games_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryWishlist_wishlists_data_attributes_games_data_attributes_cover | null;
  release_date: any | null;
  developers: QueryWishlist_wishlists_data_attributes_games_data_attributes_developers | null;
  price: number;
}

export interface QueryWishlist_wishlists_data_attributes_games_data {
  __typename: "GameEntity";
  id: string | null;
  attributes: QueryWishlist_wishlists_data_attributes_games_data_attributes | null;
}

export interface QueryWishlist_wishlists_data_attributes_games {
  __typename: "GameRelationResponseCollection";
  data: QueryWishlist_wishlists_data_attributes_games_data[];
}

export interface QueryWishlist_wishlists_data_attributes {
  __typename: "Wishlist";
  games: QueryWishlist_wishlists_data_attributes_games | null;
}

export interface QueryWishlist_wishlists_data {
  __typename: "WishlistEntity";
  id: string | null;
  attributes: QueryWishlist_wishlists_data_attributes | null;
}

export interface QueryWishlist_wishlists {
  __typename: "WishlistEntityResponseCollection";
  data: QueryWishlist_wishlists_data[];
}

export interface QueryWishlist {
  wishlists: QueryWishlist_wishlists | null;
}

export interface QueryWishlistVariables {
  identifier: string;
}
