import { useQueryGames } from 'graphql/queries/games';
import { createContext, useContext, useEffect, useState } from 'react';
import formatPrice from 'utils/format-price';
import { getStorageItem } from 'utils/localStorage';
import { cartMapper } from 'utils/mappers';

const CART_KEY = 'cartItems';

type CartItem = {
  id: string;
  img: string;
  title: string;
  price: string;
};

export type CartContextData = {
  items: CartItem[];
  quantity: number;
  total: string;
};

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00',
};

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues,
);

export type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const data = getStorageItem(CART_KEY);
    if (data) {
      setCartItems(data);
    }
  }, []);

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: { filters: { id: { in: cartItems } } },
  });

  const total = data?.games?.data.reduce((acc, game) => {
    return acc + game.attributes!.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
