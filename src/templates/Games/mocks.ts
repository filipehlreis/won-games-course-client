import { QUERY_GAMES } from 'graphql/queries/games';

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 },
  },
  result: {
    data: {
      games: [
        {
          name: 'Sample Game',
          slug: 'sample_game',
          cover: {
            url: 'sample_game.jpg',
          },
          release_date: '2014-10-12',
          developers: [
            {
              name: 'Sample developer',
            },
          ],
          price: 518.39,
          __typename: 'Game',
        },
      ],
    },
  },
};

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 },
  },
  result: {
    data: {
      games: [
        {
          name: 'Fetch More Game',
          slug: 'fetch_more',
          cover: {
            url: 'sample_game.jpg',
          },
          release_date: '2014-10-12',
          developers: [
            {
              name: 'Sample developer',
            },
          ],
          price: 518.39,
          __typename: 'Game',
        },
      ],
    },
  },
};
