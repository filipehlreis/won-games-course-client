import { initializeApollo } from 'utils/apollo';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';

import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist';

import gamesMock from 'components/GameCardSlider/mock';
import protectedRoutes from 'utils/protected-routes';
import { GetServerSidePropsContext } from 'next';
// import {
//   QueryWishlist,
//   QueryWishlistVariables,
// } from 'graphql/generated/QueryWishlist';
// import { QUERY_WISHLIST } from 'graphql/queries/wishlist';

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  // const apolloClient = initializeApollo({}, session);

  // necessario corrigir o initializeApollo
  const apolloClient = initializeApollo();

  if (!session) return {};

  // await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
  //   query: QUERY_WISHLIST,
  //   variables: {
  //     identifier: session.user?.email as string,
  //   },
  // });

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  const recommended = data.recommended?.data?.attributes?.section;

  return {
    props: {
      session,
      // initialApolloState: apolloClient.cache.extract(),
      games: gamesMock,
      recommendedTitle: recommended?.title,
      recommendedGames: gamesMapper(recommended?.games),
      recommendedHighlight: highlightMapper(recommended?.highlight),
    },
  };
}
