import { initializeApollo } from 'utils/apollo';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';

import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist';

import gamesMock from 'components/GameCardSlider/mock';
import protectedRoutes from 'utils/protected-routes';
import { GetServerSidePropsContext } from 'next';

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  console.log('session do wishlit', session);
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  const recommended = data.recommended?.data?.attributes?.section;

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: recommended?.title,
      recommendedGames: gamesMapper(recommended?.games),
      recommendedHighlight: highlightMapper(recommended?.highlight),
    },
  };
}
