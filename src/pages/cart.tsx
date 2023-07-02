import { initializeApollo } from 'utils/apollo';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';

import Cart, { CartProps } from 'templates/Cart';

import protectedRoutes from 'utils/protected-routes';
import { GetServerSidePropsContext } from 'next';
// import { Session } from 'next-auth';

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

// type SessionPropsHere = {
//   session?: Session | null;
//   accessToken?: string;
// };

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  const recommended = data.recommended?.data?.attributes?.section;
  // console.log('()())()(())(()()())( session do cart props', session);
  // const accessToken = '1111';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const objeto: any = session;

  return {
    props: {
      session,
      accessToken: objeto!.accessToken,
      recommendedTitle: recommended?.title,
      recommendedGames: gamesMapper(recommended?.games),
      recommendedHighlight: highlightMapper(recommended?.highlight),
    },
  };
}
