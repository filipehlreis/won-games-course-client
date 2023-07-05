import { QueryOrders_orders_data } from 'graphql/generated/QueryOrders';
import {
  bannerMapper,
  cartMapper,
  gamesMapper,
  highlightMapper,
  ordersMapper,
} from '.';
import { QueryGames } from '../../graphql/generated/QueryGames';
import { QueryGames_games } from '../../graphql/generated/QueryGames';
import {
  QueryHome_banners,
  QueryHome_sections_data_attributes_freeGames_highlight,
} from '../../graphql/generated/QueryHome';

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      data: [
        {
          attributes: {
            image: {
              data: {
                attributes: {
                  url: '/image.jpg',
                },
              },
            },
            title: 'Banner title',
            subtitle: 'Banner subtitle',
            button: {
              label: 'button label',
              link: 'button link',
            },
            ribbon: {
              text: 'ribbon text',
              color: 'primary',
              size: 'small',
            },
          },
        },
      ],
    } as QueryHome_banners;

    expect(bannerMapper(banner)).toStrictEqual([
      {
        img: 'http://localhost:1337/image.jpg',
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small',
      },
    ]);
  });
});

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([]);
  });

  it('should return the correct format when mapped', () => {
    const game = {
      data: [
        {
          id: '1',
          attributes: {
            cover: {
              data: {
                attributes: {
                  url: '/image.jpg',
                },
              },
            },
            developers: {
              data: [
                {
                  attributes: {
                    name: 'developer',
                  },
                },
              ],
            },
            name: 'game',
            price: 10,
            release_date: '',
            slug: 'game',
          },
        },
      ],
    } as QueryGames_games;

    expect(gamesMapper(game)).toStrictEqual([
      {
        id: '1',
        title: 'game',
        slug: 'game',
        developer: 'developer',
        img: 'http://localhost:1337/image.jpg',
        price: 10,
      },
    ]);
  });
});

describe('highlightMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(highlightMapper(null)).toStrictEqual({});
  });

  it('should return the correct format when mapped', () => {
    const highlight: QueryHome_sections_data_attributes_freeGames_highlight = {
      __typename: 'ComponentPageHighlight',
      title: 'highlight title',
      subtitle: 'highlight subtitle',
      background: {
        data: {
          attributes: {
            url: '/image1.jpg',
          },
        },
      },
      floatImage: {
        data: {
          attributes: {
            url: '/image2.jpg',
          },
        },
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'left',
    } as QueryHome_sections_data_attributes_freeGames_highlight;

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'highlight title',
      subtitle: 'highlight subtitle',
      backgroundImage: 'http://localhost:1337/image1.jpg',
      floatImage: 'http://localhost:1337/image2.jpg',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'left',
    });
  });
});

describe('cartMapper()', () => {
  it('should return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([]);
  });

  it('should return mapped items', () => {
    const game = {
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
            },
          },
        ],
      },
    } as unknown as QueryGames;

    expect(cartMapper(game)).toStrictEqual([
      {
        id: '1',
        img: 'http://localhost:1337/sample_game_1.jpg',
        title: 'Sample Game 1',
        price: '$9.90',
      },
    ]);
  });

  it('should return mapped 2 items', () => {
    const game = {
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
            },
          },
          {
            id: '2',
            attributes: {
              name: 'Sample Game 2',
              slug: 'sample_game_2',
              short_description: 'Sample description 2',
              price: 9.9,
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
            },
          },
        ],
      },
    } as unknown as QueryGames;

    expect(cartMapper(game)).toStrictEqual([
      {
        id: '1',
        img: 'http://localhost:1337/sample_game_1.jpg',
        title: 'Sample Game 1',
        price: '$9.90',
      },
      {
        id: '2',
        img: 'http://localhost:1337/sample_game_2.jpg',
        title: 'Sample Game 2',
        price: '$9.90',
      },
    ]);
  });
});

describe('ordersMapper()', () => {
  it('should return empty array if no orders', () => {
    //

    expect(ordersMapper(undefined)).toStrictEqual([]);
  });

  it('should return mapped items', () => {
    const orders = [
      {
        __typename: 'OrderEntity',
        id: '1',
        attributes: {
          card_brand: 'visa',
          card_last4: '4242',
          createdAt: '2021-04-14T18:41:48.358Z',
          games: {
            data: [
              {
                id: '1',
                attributes: {
                  name: 'game',
                  price: 10,
                  developers: {
                    data: [
                      {
                        attributes: {
                          name: 'developer',
                        },
                      },
                    ],
                  },
                  slug: 'game',
                  cover: {
                    data: {
                      attributes: {
                        url: '/image.jpg',
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      } as QueryOrders_orders_data,
    ];

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: 'visa',
          img: '/img/cards/visa.png',
          number: '**** **** **** 4242',
          purchaseDate: 'Purchase made on Apr 14, 2021',
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$10.00',
          },
        ],
      },
    ]);
  });

  it('should return free game when its free', () => {
    const orders = [
      {
        __typename: 'OrderEntity',
        id: '1',
        attributes: {
          card_brand: null,
          card_last4: null,
          createdAt: '2021-04-14T18:41:48.358Z',
          games: {
            data: [
              {
                id: '1',
                attributes: {
                  name: 'game',
                  price: 0,
                  developers: {
                    data: [
                      {
                        attributes: {
                          name: 'developer',
                        },
                      },
                    ],
                  },
                  slug: 'game',
                  cover: {
                    data: {
                      attributes: {
                        url: '/image.jpg',
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      } as QueryOrders_orders_data,
    ];

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: null,
          img: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on Apr 14, 2021',
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$0.00',
          },
        ],
      },
    ]);
  });
});
