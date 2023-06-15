import CartButton from 'components/CartButton';
import WishlistButton from 'components/WishlistButton';

import Heading from 'components/Heading';
import { Ribbon } from 'components/Ribbon';
import formatPrice from 'utils/format-price';

import * as S from './styles';

export type GameInfoProps = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const GameInfo = ({ id, title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <CartButton id={id} size="large" hasText />

        <WishlistButton id={id} hasText size="large" />
        {/* <Button icon={<FavoriteBorder />} size="large" minimal>
          Wishlist
        </Button> */}
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};

export default GameInfo;
