import { gql } from '@apollo/client';

export const QUERY_PROFILE_ME = gql`
  query QueryProfileMe($identifier: ID!) {
    usersPermissionsUser(id: $identifier) {
      data {
        id
        attributes {
          username
          email
        }
      }
    }
  }
`;

export const QUERY_GET_ID_FROM_USERS_FILTER = gql`
  query QueryGetIDFromUserFilter($input: UsersPermissionsUserFiltersInput) {
    usersPermissionsUsers(filters: $input) {
      data {
        id
        attributes {
          username
          email
        }
      }
    }
  }
`;
