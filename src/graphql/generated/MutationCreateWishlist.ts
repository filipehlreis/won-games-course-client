/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateWishlist
// ====================================================

export interface MutationCreateWishlist_createWishlist_data_attributes_user_data_attributes {
  __typename: "UsersPermissionsUser";
  username: string;
}

export interface MutationCreateWishlist_createWishlist_data_attributes_user_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: MutationCreateWishlist_createWishlist_data_attributes_user_data_attributes | null;
}

export interface MutationCreateWishlist_createWishlist_data_attributes_user {
  __typename: "UsersPermissionsUserEntityResponse";
  data: MutationCreateWishlist_createWishlist_data_attributes_user_data | null;
}

export interface MutationCreateWishlist_createWishlist_data_attributes_games {
  __typename: "GameRelationResponseCollection";
}

export interface MutationCreateWishlist_createWishlist_data_attributes {
  __typename: "Wishlist";
  user: MutationCreateWishlist_createWishlist_data_attributes_user | null;
  games: MutationCreateWishlist_createWishlist_data_attributes_games | null;
}

export interface MutationCreateWishlist_createWishlist_data {
  __typename: "WishlistEntity";
  id: string | null;
  attributes: MutationCreateWishlist_createWishlist_data_attributes | null;
}

export interface MutationCreateWishlist_createWishlist {
  __typename: "WishlistEntityResponse";
  data: MutationCreateWishlist_createWishlist_data | null;
}

export interface MutationCreateWishlist {
  createWishlist: MutationCreateWishlist_createWishlist | null;
}

export interface MutationCreateWishlistVariables {
  input: WishlistInput;
}
