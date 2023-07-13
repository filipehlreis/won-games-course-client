import formatPrice from 'utils/format-price';
import {
  QueryGames,
  QueryGames_games,
} from '../../graphql/generated/QueryGames';
import {
  QueryHome_banners,
  QueryHome_sections_data_attributes_freeGames_highlight,
  QueryHome_sections_data_attributes_popularGames_games,
} from '../../graphql/generated/QueryHome';
import { QueryWishlist_wishlists_data_attributes_games } from 'graphql/generated/QueryWishlist';

import { QueryOrders_orders_data } from 'graphql/generated/QueryOrders';
import { getImageUrl } from 'utils/getImageUrl';

export const bannerMapper = (banners: QueryHome_banners) => {
  return banners!.data.map((banner) => ({
    img: `${getImageUrl(banner.attributes!.image.data?.attributes?.url)}`,
    title: banner.attributes!.title,
    subtitle: banner.attributes!.subtitle,
    buttonLabel: banner.attributes!.button?.label,
    buttonLink: banner.attributes!.button?.link,
    ...(banner.attributes!.ribbon && {
      ribbon: banner.attributes!.ribbon?.text,
      ribbonColor: banner.attributes!.ribbon?.color,
      ribbonSize: banner.attributes!.ribbon?.size,
    }),
  }));
};

export const gamesMapper = (
  games:
    | QueryGames_games
    | QueryWishlist_wishlists_data_attributes_games
    | QueryHome_sections_data_attributes_popularGames_games
    | null
    | undefined,
) => {
  // console.info(
  //   'dentro do gameMapper games >>>>>>',
  //   JSON.stringify(games, null, 2),
  // );
  return games
    ? games.data?.map((game) => ({
        id: game.id!,
        title: game.attributes!.name,
        slug: game.attributes!.slug,
        developer: game.attributes!.developers!.data[0].attributes!.name,
        img: `${getImageUrl(game.attributes!.cover?.data!.attributes!.url)}`,
        price: game.attributes!.price,
      }))
    : [];
};

export const highlightMapper = (
  highlight:
    | QueryHome_sections_data_attributes_freeGames_highlight
    | null
    | undefined,
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: `${getImageUrl(
          highlight.background.data?.attributes?.url,
        )}`,
        floatImage: `${getImageUrl(
          highlight.floatImage?.data?.attributes?.url,
        )}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment,
      }
    : {};
};

export const cartMapper = (games: QueryGames | undefined) => {
  return games?.games
    ? games.games.data.map((game) => ({
        id: game.id!,
        img: `${getImageUrl(game.attributes!.cover!.data!.attributes?.url)}`,
        title: game.attributes!.name,
        price: formatPrice(game.attributes!.price),
      }))
    : [];
};

export const ordersMapper = (
  orders: QueryOrders_orders_data[] | undefined | null,
) => {
  //

  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.attributes?.card_brand,
            img: order.attributes?.card_brand
              ? `/img/cards/${order.attributes?.card_brand}.png`
              : null,
            number: order.attributes?.card_last4
              ? `**** **** **** ${order.attributes?.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(order.attributes?.createdAt))}`,
          },
          games: order.attributes?.games?.data.map((game) => ({
            id: game.id,
            title: game.attributes?.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: `${getImageUrl(
              game.attributes?.cover?.data?.attributes?.url,
            )}`,
            price: formatPrice(game.attributes!.price),
          })),
        };
      })
    : [];
};
