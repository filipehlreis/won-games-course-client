import { initializeApollo } from 'utils/apollo';
import { QUERY_GAMES } from 'graphql/queries/games';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { parseQueryStringToWhere } from 'utils/filter';
import GamesTemplate, { GamesTemplateProps } from 'templates/Games';
import { GetServerSidePropsContext } from 'next';

import { filterItems } from 'utils/filter/games_filterItems';

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo();

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      filters: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as (string | null)[],
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems,
    },
  };
}
