import { WishlistContextDefaultValues } from 'hooks/use-wishlist';
import WishlistButton from '.';
import { render, screen } from 'utils/test-utils';

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

describe('<WishlistButton />', () => {
  it('should render a button to add to wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
    };

    render(<WishlistButton id="1" />, { wishlistProviderProps });

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render a button to remove from wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
    };

    render(<WishlistButton id="1" />, { wishlistProviderProps });

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should render a button with add to wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render a button with remove from wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should not render if not logged', () => {
    const useSessionMock = jest
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .spyOn(require('next-auth/react'), 'useSession')
      .mockImplementationOnce(() => {
        return {
          status: 'unauthenticated',
          data: null,
        };
      });
    useSessionMock.mockName;

    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.queryByText(/remove from wishlist/i)).not.toBeInTheDocument();
  });
});
