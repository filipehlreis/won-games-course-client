import { QueryHookOptions, gql, useQuery } from '@apollo/client';
import { GameFragment } from 'graphql/fragments/game';
import {
  QueryWishlist,
  QueryWishlistVariables,
} from 'graphql/generated/QueryWishlist';

export const QUERY_WISHLIST = gql`
  query QueryWishlist($identifier: String!) {
    wishlists(filters: { user: { email: { eq: $identifier } } }) {
      data {
        id
        attributes {
          games {
            ...GameFragment
          }
        }
      }
    }
  }
  ${GameFragment}
`;

export function useQueryWishlist(
  options?: QueryHookOptions<QueryWishlist, QueryWishlistVariables>,
) {
  return useQuery<QueryWishlist, QueryWishlistVariables>(
    QUERY_WISHLIST,
    options,
  );
}
