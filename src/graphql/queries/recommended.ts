import { gql } from '@apollo/client';
import { GameFragmentRelation } from 'graphql/fragments/game';
import { HighlightFragment } from 'graphql/fragments/highlight';

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      data {
        attributes {
          section {
            title
            highlight {
              ...HighlightFragment
            }
            games {
              ...GameFragmentRelation
            }
          }
        }
      }
    }
  }

  ${HighlightFragment}
  ${GameFragmentRelation}
`;
