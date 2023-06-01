import { QueryHookOptions, gql, useQuery } from '@apollo/client';
import { GameFragmentRelation } from 'graphql/fragments/game';
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
            ...GameFragmentRelation
          }
        }
      }
    }
  }
  ${GameFragmentRelation}
`;

export function useQueryWishlist(
  options?: QueryHookOptions<QueryWishlist, QueryWishlistVariables>,
) {
  return useQuery<QueryWishlist, QueryWishlistVariables>(
    QUERY_WISHLIST,
    options,
  );
}
