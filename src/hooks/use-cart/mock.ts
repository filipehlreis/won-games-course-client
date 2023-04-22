import { QUERY_GAMES } from 'graphql/queries/games';

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { filters: { id: { in: ['1', '2'] } } },
  },
  result: {
    data: {
      games: {
        data: [
          {
            id: '1',
            attributes: {
              name: 'Sample Game 1',
              slug: 'sample_game_1',
              short_description: 'Sample description 1',
              price: 9.9,
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'sample developer 1',
                    },
                  },
                ],
              },
              cover: {
                data: {
                  attributes: {
                    url: '/sample_game_1.jpg',
                  },
                },
              },
              __typename: 'Game',
            },
          },
          {
            id: '2',
            attributes: {
              name: 'Sample Game 2',
              slug: 'sample_game_2',
              short_description: 'Sample description 2',
              price: 10.5,
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'sample developer 2',
                    },
                  },
                ],
              },
              cover: {
                data: {
                  attributes: {
                    url: '/sample_game_2.jpg',
                  },
                },
              },
              __typename: 'Game',
            },
          },
        ],
      },
    },
  },
};

export const cartItems = [
  {
    id: '1',
    img: 'http://localhost:1337/sample_game_1.jpg',
    price: '$9.90',
    title: 'Sample Game 1',
  },
  {
    id: '2',
    img: 'http://localhost:1337/sample_game_2.jpg',
    price: '$10.50',
    title: 'Sample Game 2',
  },
];
