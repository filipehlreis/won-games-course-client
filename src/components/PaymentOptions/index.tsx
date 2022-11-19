import { Add, ShoppingCart } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import { Heading } from 'components/Heading';
import { Radio } from 'components/Radio';

import * as S from './styles';

export type PaymentOptionsProp = {
  cards?: PaymentCard[];
  handlePayment: () => void;
};

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProp) => {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineColor="primary" lineBottom color="black" size="small">
          Payment
        </Heading>

        <S.CardList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => ({})}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="buttom">
            <Add size={14} />
            Add a new credit card
          </S.AddCard>
        </S.CardList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button fullWidth icon={<ShoppingCart />} onClick={handlePayment}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PaymentOptions;
