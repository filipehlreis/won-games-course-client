import { gql } from '@apollo/client';
import { GameFragmentRelation } from 'graphql/fragments/game';

export const QUERY_ORDERS = gql`
  query QueryOrders($identifier: ID!) {
    orders(filters: { user: { id: { eq: $identifier } } }) {
      data {
        id
        attributes {
          createdAt
          card_brand
          card_last4
          games {
            ...GameFragmentRelation
          }
        }
      }
    }
  }
  ${GameFragmentRelation}
`;
