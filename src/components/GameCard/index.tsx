import Link from 'next/link';

import { Ribbon, RibbonColors, RibbonSizes } from 'components/Ribbon';
import CartButton from 'components/CartButton';
import WishlistButton from 'components/WishlistButton';

import formatPrice from 'utils/format-price';

import * as S from './styles';
import Image from 'next/image';

export type GameCardProps = {
  id: string;
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

const GameCard = ({
  id,
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
}: GameCardProps) => {
  return (
    <S.Wrapper data-cy="game-card">
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <Link href={`game/${slug}`} passHref>
        <S.ImageBox>
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
        </S.ImageBox>
      </Link>
      <S.Content>
        <Link href={`game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>
        <S.FavButton>
          <WishlistButton id={id} />
        </S.FavButton>
        <S.BuyBox>
          {price === 0 ? (
            <S.Price>Free</S.Price>
          ) : (
            <>
              {promotionalPrice === 0 ? (
                <>
                  <S.Price isPromotional>{formatPrice(price)}</S.Price>
                  <S.Price>Free</S.Price>
                </>
              ) : (
                <>
                  {!!promotionalPrice && (
                    <S.Price isPromotional>{formatPrice(price)}</S.Price>
                  )}
                  <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
                </>
              )}
            </>
          )}

          {/* {!!promotionalPrice && (
            <S.Price isPromotional>{formatPrice(price)}</S.Price>
          )}
          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price> */}

          {/* {!!promotionalPrice && (
            <S.Price isPromotional>{formatPrice(price)}</S.Price>
          )}
          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price> */}
          <CartButton id={id} />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameCard;
