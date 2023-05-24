/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateWishlist
// ====================================================

export interface MutationUpdateWishlist_updateWishlist_data_attributes_games {
  __typename: "GameRelationResponseCollection";
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
