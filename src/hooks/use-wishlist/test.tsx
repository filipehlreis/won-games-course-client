import { MockedProvider } from '@apollo/client/testing';
import { useWishlist, WishlistProvider } from '.';
import { renderHook } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { wishlistItems, wishlistMock } from './mock';

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
    // expect(result.current.loading).toBe(true);

    // wait until get the data
    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual([
      wishlistItems[0],
      wishlistItems[1],
    ]);
  });
});
