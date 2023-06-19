/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersPermissionsUserFiltersInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: getIDFromUserFilter
// ====================================================

export interface getIDFromUserFilter_usersPermissionsUsers_data_attributes {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
}

export interface getIDFromUserFilter_usersPermissionsUsers_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: getIDFromUserFilter_usersPermissionsUsers_data_attributes | null;
}

export interface getIDFromUserFilter_usersPermissionsUsers {
  __typename: "UsersPermissionsUserEntityResponseCollection";
  data: getIDFromUserFilter_usersPermissionsUsers_data[];
}

export interface getIDFromUserFilter {
  usersPermissionsUsers: getIDFromUserFilter_usersPermissionsUsers | null;
}

export interface getIDFromUserFilterVariables {
  input?: UsersPermissionsUserFiltersInput | null;
}
