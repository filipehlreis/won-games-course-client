/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishlist
// ====================================================

export interface QueryWishlist_wishlists_data_attributes_games {
  __typename: "GameRelationResponseCollection";
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
