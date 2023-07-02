import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Base from 'templates/Base';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import Heading from 'components/Heading';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import PaymentForm from 'components/PaymentForm';
import CartList, { CartListProps } from 'components/CartList';
import Showcase from 'components/Showcase';

import * as S from './styles';
import { Info } from '@styled-icons/material-outlined';
// import { Session } from 'next-auth';
import { GenericObject } from 'pages/api/auth/[...nextauth]';

export type CartProps = {
  session: GenericObject;
  accessToken: string;
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps;

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

const Cart = ({
  // session,
  accessToken,
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
}: CartProps) => {
  // console.log('++++++++++++++++++session do cart', session);
  // console.log('++++++++++++++++++accessToken do cart', accessToken);

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />
          <Elements stripe={stripe}>
            <PaymentForm accessToken={accessToken} />
          </Elements>
        </S.Content>

        <S.Text>
          <Info size={18} /> Your purchase is protected by a secure connection
          from the WON platform. By purchasing from our store you agree and
          agree to our <a href="#">terms of use.</a> After making the purchase
          you are entitled to a refund within a maximum of 30 days, without any
          additional cost, as long as the download of the purchased game has not
          occurred after your purchase.
        </S.Text>
        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Cart;
