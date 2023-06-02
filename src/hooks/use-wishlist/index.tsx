import { useMutation } from '@apollo/client';
import { GameCardProps } from 'components/GameCard';
import { QueryWishlist_wishlists_data_attributes_games } from 'graphql/generated/QueryWishlist';
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST,
} from 'graphql/mutations/wishlist';
import { useQueryWishlist } from 'graphql/queries/wishlist';
import { useSession } from 'next-auth/react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { gamesMapper } from 'utils/mappers';

export type WishlistContextData = {
  items: GameCardProps[];
  isInWishlist: (id: string) => boolean;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  loading: boolean;
};

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false,
};

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues,
);

export type WishlistProviderProps = {
  children: React.ReactNode;
};

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const { data: session, status } = useSession();
  const [wishlistId, setWishlistId] = useState<string | null>();
  console.log('session', session);
  console.log('status', status);

  const [wishlistItems, setWishlistItems] =
    useState<QueryWishlist_wishlists_data_attributes_games>({
      __typename: 'GameRelationResponseCollection',
      data: [],
    });

  const [createList /*, { loading: loadingCreate }*/] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.createWishlist?.data?.attributes?.games || []);
        setWishlistId(data?.createWishlist?.data?.id);
      },
    },
  );

  const [updateList /*, { loading: loadingUpdate }*/] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.data?.attributes?.games || []);
      },
    },
  );

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string,
    },
  });
  console.info(
    '<<<<<primeira impressao de data >>>>>',
    JSON.stringify(data, null, 2),
  );

  console.log('loading', loading);
  useEffect(() => {
    const gameObject: QueryWishlist_wishlists_data_attributes_games = {
      __typename: 'GameRelationResponseCollection',
      data: [],
    };
    console.log('data dentro do useeffect', data);
    console.info(
      'data dentro do useeffect info >>>>>>',
      JSON.stringify(data, null, 2),
    );
    console.info(
      'dentro do useeffect info para o setwishlistItems >>>>>>',
      JSON.stringify(
        data?.wishlists?.data[0]?.attributes?.games?.data,
        null,
        2,
      ),
    );
    setWishlistItems(data?.wishlists?.data[0]?.attributes?.games || gameObject);
    // console.info(
    //   'dentro do useeffect info para o wishlistItems >>>>>>',
    //   JSON.stringify(wishlistItems, null, 2),
    // );
    setWishlistId(data?.wishlists?.data[0]?.id);
  }, [data]);

  const wishlistIds = useMemo(
    () => wishlistItems.data.map((game) => game.id),
    [wishlistItems],
  );

  const isInWishlist = (id: string) =>
    !!wishlistItems.data.find((game) => game.id === id);

  const addToWishlist = (id: string) => {
    // se nao existir wishlist -> cria
    console.log(
      'wishlistIds>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
      wishlistIds,
    );
    if (!wishlistId) {
      return createList({
        variables: {
          input: {
            games: [...wishlistIds, id],
            user: 1,
          },
        },
      });
    }
    // senao, atualiza a wishlist existente
    return updateList({
      variables: {
        id: wishlistId,
        data: {
          games: [...wishlistIds, id],
          user: 1,
        },
      },
    });
  };

  const removeFromWishlist = (/*id: string*/) => {
    //
  };

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
