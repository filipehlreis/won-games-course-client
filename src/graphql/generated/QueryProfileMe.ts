/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProfileMe
// ====================================================

export interface QueryProfileMe_usersPermissionsUser_data_attributes {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
}

export interface QueryProfileMe_usersPermissionsUser_data {
  __typename: "UsersPermissionsUserEntity";
  id: string | null;
  attributes: QueryProfileMe_usersPermissionsUser_data_attributes | null;
}

export interface QueryProfileMe_usersPermissionsUser {
  __typename: "UsersPermissionsUserEntityResponse";
  data: QueryProfileMe_usersPermissionsUser_data | null;
}

export interface QueryProfileMe {
  usersPermissionsUser: QueryProfileMe_usersPermissionsUser | null;
}

export interface QueryProfileMeVariables {
  identifier: string;
}
