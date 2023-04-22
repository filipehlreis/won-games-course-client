import { renderHook } from '@testing-library/react-hooks';
import { setStorageItem } from 'utils/localStorage';

import { useCart, CartProvider, CartProviderProps } from '.';
import { cartItems, gamesMock } from './mock';
import { MockedProvider } from '@apollo/client/testing';

describe('useCart', () => {
  it('should return items and its info if there are any in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    );

    setStorageItem('cartItems', ['1', '2']);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual(cartItems);
  });
});

// // import { renderHook, waitFor } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks';
// import { setStorageItem } from 'utils/localStorage';

// import { useCart, CartProvider, CartProviderProps } from '.';
// import { cartItems, gamesMock } from './mock';
// import { MockedProvider } from '@apollo/client/testing';

// describe('useCart', () => {
//   it('should return items and its info if there are any in the cart', async () => {
//     const wrapper = ({ children }: CartProviderProps) => (
//       <MockedProvider mocks={[gamesMock]}>
//         <CartProvider>{children}</CartProvider>
//       </MockedProvider>
//     );

//     setStorageItem('cartItems', ['1', '2']);

//     const { result, waitFor } = renderHook(() => useCart(), {
//       wrapper,
//     });

//     await waitFor(() => {
//       console.log('all', result.all);
//       result.current.items == cartItems;
//     });

//     expect(result.current.items).toStrictEqual(cartItems);
//   });
// });
