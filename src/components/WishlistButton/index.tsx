import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined';
import Button, { ButtonProps } from 'components/Button';
import { useWishlist } from 'hooks/use-wishlist';
import { useSession } from 'next-auth/react';

export type WIshlistButtonProps = {
  id: string;
  hasText?: boolean;
} & Pick<ButtonProps, 'size'>;

const WishlistButton = ({
  id,
  hasText = false,
  size = 'small',
}: WIshlistButtonProps) => {
  const { data: session } = useSession();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const handleClick = () => {
    isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id);
  };

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist';

  if (!session) return null;

  return (
    <Button
      icon={
        isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      onClick={handleClick}
      minimal
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  );
};

export default WishlistButton;
