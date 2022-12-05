import { gql } from '@apollo/client';

export const QUERY_GAMES = gql`
  query QueryGames {
    games(pagination: { limit: 30 }) {
      data {
        attributes {
          name
          slug
          cover {
            data {
              attributes {
                url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          price
        }
      }
    }
  }
`;
