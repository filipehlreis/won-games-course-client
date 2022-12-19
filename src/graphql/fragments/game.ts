import { gql } from '@apollo/client';

export const GameFragment = gql`
  fragment GameFragment on GameEntityResponseCollection {
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
        release_date
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
`;

export const GameFragmentRelation = gql`
  fragment GameFragmentRelation on GameRelationResponseCollection {
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
        release_date
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
`;
