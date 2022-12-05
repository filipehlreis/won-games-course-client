import GamesTemplate, { GamesTemplateProps } from 'templates/Games';

import filterItemsMock from 'components/ExploreSidebar/mock';
import { initializeApollo } from 'utils/apollo';
import { QUERY_GAMES } from 'graphql/queries/games';

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

type GameProps = {
  attributes: {
    name: string;
    slug: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    developers: {
      data: [
        {
          attributes: {
            name: string;
          };
        },
      ];
    };
    price: number;
  };
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
  });

  return {
    props: {
      revalidate: 60,
      games: data.games.data.map((game: GameProps) => ({
        title: game.attributes.name,
        developer: game.attributes.developers.data[0].attributes.name,
        img: `http://localhost:1337${game.attributes.cover.data.attributes.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD',
        }).format(game.attributes.price),
      })),
      filterItems: filterItemsMock,
    },
  };
}
