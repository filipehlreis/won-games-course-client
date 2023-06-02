import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST,
} from 'graphql/mutations/wishlist';
import { QUERY_WISHLIST } from 'graphql/queries/wishlist';

const gameMock = (id: string) => ({
  __typename: 'GameEntity',
  id,
  attributes: {
    name: `Sample Game ${id}`,
    slug: `sample-game-${id}`,
    cover: {
      data: {
        attributes: {
          url: '/sample-game.jpg',
        },
      },
    },
    developers: {
      data: [
        {
          attributes: {
            name: 'sample developer',
          },
        },
      ],
    },

    price: 10.5,
  },
});

export const wishlistMock = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: '123' } },
    variables: {
      identifier: 'lorem@ipsum.com',
    },
  },
  result: {
    data: {
      wishlists: {
        data: [
          {
            id: 1,
            attributes: {
              games: {
                __typename: 'GameRelationResponseCollection',
                data: [gameMock('1'), gameMock('2')],
              },
            },
          },
        ],
      },
    },
  },
};

export const createWishlistMock = {
  request: {
    query: MUTATION_CREATE_WISHLIST,
    context: { session: { jwt: '123' } },
    variables: {
      input: {
        games: ['3'],
        user: 1,
      },
    },
  },
  result: {
    data: {
      createWishlist: {
        data: {
          id: '1',
          attributes: {
            games: {
              data: [gameMock('3')],
            },
          },
        },
      },
    },
  },
};

export const updateWishlistMock = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: '123' } },
    variables: {
      id: 1,
      data: {
        games: ['1', '2', '3'],
        user: 1,
      },
    },
  },
  result: {
    data: {
      updateWishlist: {
        data: {
          id: '1',
          attributes: {
            games: {
              data: [gameMock('1'), gameMock('2'), gameMock('3')],
            },
          },
        },
      },
    },
  },
};

export const wishlistItems = [
  {
    id: '1',
    title: 'Sample Game 1',
    slug: 'sample-game-1',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5,
  },
  {
    id: '2',
    title: 'Sample Game 2',
    slug: 'sample-game-2',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5,
  },
  {
    id: '3',
    title: 'Sample Game 3',
    slug: 'sample-game-3',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5,
  },
];
