import { gql } from '@apollo/client';

export const GameFragment = gql`
  fragment GameFragment on GameEntityResponseCollection {
    meta {
      pagination {
        total
      }
    }
    data {
      id
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
      id
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
