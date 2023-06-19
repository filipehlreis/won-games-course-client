/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersPermissionsUserFiltersInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryGetIDFromUserFilter
// ====================================================

export interface QueryGetIDFromUserFilter_usersPermissionsUsers_data_attributes {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
}

export interface QueryGetIDFromUserFilter_usersPermissionsUsers_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: QueryGetIDFromUserFilter_usersPermissionsUsers_data_attributes | null;
}

export interface QueryGetIDFromUserFilter_usersPermissionsUsers {
  __typename: "UsersPermissionsUserEntityResponseCollection";
  data: QueryGetIDFromUserFilter_usersPermissionsUsers_data[];
}

export interface QueryGetIDFromUserFilter {
  usersPermissionsUsers: QueryGetIDFromUserFilter_usersPermissionsUsers | null;
}

export interface QueryGetIDFromUserFilterVariables {
  input?: UsersPermissionsUserFiltersInput | null;
}
