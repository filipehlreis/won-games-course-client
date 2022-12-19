import { gql } from '@apollo/client';

export const HighlightFragment = gql`
  fragment HighlighFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      data {
        attributes {
          url
        }
      }
    }
    floatImage {
      data {
        attributes {
          url
        }
      }
    }
    buttonLabel
    buttonLink
    alignment
  }
`;
