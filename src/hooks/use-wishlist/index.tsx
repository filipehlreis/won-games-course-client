import { GameCardProps } from 'components/GameCard';
import { QueryWishlist_wishlists_data_attributes_games } from 'graphql/generated/QueryWishlist';
import { useQueryWishlist } from 'graphql/queries/wishlist';
import { useSession } from 'next-auth/react';
import { createContext, useContext, useEffect, useState } from 'react';
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
  console.log('session', session);
  console.log('status', status);

  const [wishlistItems, setWishlistItems] =
    useState<QueryWishlist_wishlists_data_attributes_games>({
      __typename: 'GameRelationResponseCollection',
      data: [],
    });

  const isInWishlist = (/*id: string*/) => false;
  const addToWishlist = (/*id: string*/) => {
    //
  };
  const removeFromWishlist = (/*id: string*/) => {
    //
  };

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
  }, [data]);

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
