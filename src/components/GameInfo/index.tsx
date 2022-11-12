import {
  AddShoppingCart,
  FavoriteBorder,
} from '@styled-icons/material-outlined/';
import Button from 'components/Button';
import { Heading } from 'components/Heading';
import { Ribbon } from 'components/Ribbon';
import * as S from './styles';

export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

export const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color="black" lineBottom size="medium" lineColor="primary">
        {title}
      </Heading>
      <S.Description>{description}</S.Description>
      <S.Price>
        <Ribbon>{price}</Ribbon>
      </S.Price>

      <Button size="medium" icon={<AddShoppingCart />}>
        Add to cart
      </Button>

      <Button size="medium" minimal icon={<FavoriteBorder />}>
        Wishlist
      </Button>
    </S.Wrapper>
  );
};
