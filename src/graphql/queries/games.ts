import { gql, QueryHookOptions, useQuery } from '@apollo/client';
import { GameFragment } from 'graphql/fragments/game';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';

export const QUERY_GAMES = gql`
  query QueryGames(
    $limit: Int!
    $start: Int
    $filters: GameFiltersInput
    $sort: [String]
  ) {
    games(
      pagination: { limit: $limit, start: $start }
      filters: $filters
      sort: $sort
    ) {
      ...GameFragment
    }
  }

  ${GameFragment}
`;

export const QUERY_GAME_BY_SLUG = gql`
  # Write your query or mutation here
  query QueryGamesBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
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
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export function useQueryGames(
  options?: QueryHookOptions<QueryGames, QueryGamesVariables>,
) {
  return useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, options);
}
