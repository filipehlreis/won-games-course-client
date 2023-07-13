import { initializeApollo } from 'utils/apollo';
import { useRouter } from 'next/router';

import Game, { GameTemplateProps } from 'templates/Game';

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games';
import {
  QueryGamesBySlug,
  QueryGamesBySlugVariables,
} from 'graphql/generated/QueryGamesBySlug';
import { GetStaticProps } from 'next';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import {
  QueryUpcoming,
  QueryUpcomingVariables,
} from 'graphql/generated/QueryUpcoming';
import { QUERY_UPCOMING } from 'graphql/queries/upcoming';
import { getImageUrl } from 'utils/getImageUrl';

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
  // Get game data
  const { data } = await apolloClient.query<
    QueryGamesBySlug,
    QueryGamesBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache',
  });

  if (!data.games?.data.length) {
    return { notFound: true };
  }

  const game = data.games.data[0].attributes!;
  const gameId = data.games.data[0].id!;

  // get recommended games
  const { data: dataRecommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  const recommended = dataRecommended.recommended?.data?.attributes?.section;

  // get upcoming games and highlight
  const TODAY = new Date().toISOString().slice(0, 10);
  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: QUERY_UPCOMING,
    variables: { date: TODAY },
  });

  return {
    revalidate: 60,
    props: {
      cover: `${getImageUrl(game!.cover?.data!.attributes!.src)}`,
      gameInfo: {
        id: gameId,
        title: game.name,
        price: game.price,
        description: game.short_description,
      },
      gallery: game.gallery!.data.map((image) => ({
        src: `${getImageUrl(image.attributes!.src)}`,
        label: image.attributes!.label,
      })),
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
      upcomingTitle: upcoming.showcase?.data?.attributes?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcoming.showcase?.data?.attributes?.upcomingGames?.highlight,
      ),
      recommendedTitle: recommended?.title,
      recommendedGames: gamesMapper(recommended?.games),
    },
  };
};
