import { gql } from '@apollo/client';

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          title
          subtitle
          button {
            label
            link
          }
          ribbon {
            text
            color
            size
          }
        }
      }
    }
  }
`;
