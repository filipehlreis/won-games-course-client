import { QUERY_GAMES } from 'graphql/queries/games';

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, filter: {} },
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
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection',
      },
    },
  },
};

export const noGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, filter: {} },
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection',
      },
    },
  },
};

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, filter: {}, start: 1 },
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
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection',
      },
    },
  },
};
