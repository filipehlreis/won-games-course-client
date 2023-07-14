import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined';
import Button, { ButtonProps } from 'components/Button';
import Spinner from 'components/Spinner';
import { useWishlist } from 'hooks/use-wishlist';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

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
  const [loading, setLoading] = useState(false);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const handleClick = async () => {
    setLoading(true);
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id);
    setLoading(false);
  };

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist';

  if (!session) return null;

  return (
    <Button
      aria-label={ButtonText}
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
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
