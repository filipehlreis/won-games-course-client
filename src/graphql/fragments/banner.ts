import { gql } from '@apollo/client';

export const BannerFragment = gql`
  fragment BannerFragment on BannerEntityResponseCollection {
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
`;
