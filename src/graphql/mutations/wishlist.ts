import { gql } from '@apollo/client';
import { GameFragment } from 'graphql/fragments/game';

export const MUTATION_CREATE_WISHLIST = gql`
  mutation MutationCreateWishlist($input: WishlistInput!) {
    createWishlist(data: $input) {
      data {
        id
        attributes {
          user {
            data {
              id
              attributes {
                username
              }
            }
          }
          games {
            ...GameFragment
          }
        }
      }
    }
  }
  ${GameFragment}
`;

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishlist($id: ID!, $data: WishlistInput!) {
    updateWishlist(id: $id, data: $data) {
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
