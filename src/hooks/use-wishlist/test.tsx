import { MockedProvider } from '@apollo/client/testing';
import { useWishlist, WishlistProvider } from '.';
import { renderHook } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import {
  createWishlistMock,
  updateWishlistMock,
  wishlistItems,
  wishlistMock,
} from './mock';
import { act, waitFor } from '@testing-library/react';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const useSession = jest.spyOn(require('next-auth/react'), 'useSession');
// const session = {
//   status: 'oi',
//   jwt: '123',
//   user: { email: 'lorem@ipsum.com' },
// };
// useSession.mockImplementation(() => [session]);

// jest.mock('next-auth/react', () => ({
//   useSession: jest.fn(() => {
//     return [{ data: null, status: null }];
//   }),
// }));

const useSessionMock = jest
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  .spyOn(require('next-auth/react'), 'useSession')
  .mockImplementation(() => {
    return {
      status: 'authenticated',
      jwt: '123',
      data: { user: { email: 'lorem@ipsum.com' } },
    };
  });
useSessionMock.mockName;

describe('useWishlist', () => {
  it('should return wishlist items', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper,
    });

    // it starts loading the data
    expect(result.current.loading).toBe(true);

    // wait until get the data
    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual([
      wishlistItems[0],
      wishlistItems[1],
    ]);
  });

  it('should check if the game is in the wishlist', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper,
    });

    // wait until get the data
    await waitForNextUpdate();

    expect(result.current.isInWishlist('1')).toBe(true);
    expect(result.current.isInWishlist('2')).toBe(true);
    expect(result.current.isInWishlist('3')).toBe(false);
  });

  it('should add item in wishlist creating a new list', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[createWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper,
    });

    act(() => {
      result.current.addToWishlist('3');
    });

    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual([wishlistItems[2]]);
  });

  it('should add item in wishlist updating the current list', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[wishlistMock, updateWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper,
    });

    // wait for the data to load
    await waitForNextUpdate();

    act(() => {
      result.current.addToWishlist('3');
    });

    // await waitForNextUpdate();
    await waitFor(() => {
      expect(result.current.items).toStrictEqual(wishlistItems);
    });
  });
});
