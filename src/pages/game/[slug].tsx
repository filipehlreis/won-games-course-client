import { initializeApollo } from 'utils/apollo';
import { useRouter } from 'next/router';

import Game, { GameTemplateProps } from 'templates/Game';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games';
import {
  QueryGamesBySlug,
  QueryGamesBySlugVariables,
} from 'graphql/generated/QueryGamesBySlug';
import { GetStaticProps } from 'next';

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
  const router = useRouter();

  //se a rota nao tiver sido gerado ainda
  // voce podemostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null;

  return <Game {...props} />;
}

// gerar em build time (/game/bla, /game/foo ...)
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  });

  const paths = data.games!.data.map(({ attributes }) => ({
    params: { slug: attributes!.slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGamesBySlug,
    QueryGamesBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
  });

  if (!data.games?.data.length) {
    return { notFound: true };
  }

  const game = data.games.data[0].attributes!;

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game!.cover?.data!.attributes!.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description,
      },
      gallery: game.gallery!.data,
      description: game.description,
      details: {
        developer: game.developers!.data[0].attributes!.name,
        releaseDate: game.release_date,
        platforms: game.platforms!.data.map(
          (platform) => platform.attributes!.name,
        ),
        publisher: game.publisher!.data!.attributes!.name,
        rating: game.rating,
        genres: game.categories!.data.map(
          (category) => category.attributes!.name,
        ),
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock,
    },
  };
};
