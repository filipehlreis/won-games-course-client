import Success, { SuccessTemplateProps } from 'templates/Success';

import { initializeApollo } from 'utils/apollo';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';

import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';

import { gamesMapper, highlightMapper } from 'utils/mappers';

export default function SuccessPage(props: SuccessTemplateProps) {
  return <Success {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  const recommended = data.recommended?.data?.attributes?.section;

  return {
    revalidate: 60 * 60,
    props: {
      recommendedTitle: recommended?.title,
      recommendedGames: gamesMapper(recommended?.games),
      recommendedHighlight: highlightMapper(recommended?.highlight),
    },
  };
}
