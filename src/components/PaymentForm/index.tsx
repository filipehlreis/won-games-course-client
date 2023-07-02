import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Heading from 'components/Heading';

import * as S from './styles';
import { useCart } from 'hooks/use-cart';
import { createPaymentIntent } from 'utils/stripe/methods';
import { FormLoading } from 'components/Form';
import { useRouter } from 'next/router';

type PaymentFormProps = {
  accessToken?: string;
};

const PaymentForm = ({ accessToken }: PaymentFormProps) => {
  // const PaymentForm = () => {
  const { items } = useCart();
  const { push } = useRouter();

  // const { data: session } = useSession();
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [freeGames, setFreeGames] = useState(false);

  console.log('items.length fora do effect', items.length);
  // console.log('accessToken fora use effect\n', accessToken);

  useEffect(() => {
    async function setPaymentMode() {
      // console.log('items.length', await items.length);
      if (items.length) {
        // console.log('accessToken dentro do use effect\n', accessToken);
        // bater na API /orders/create-payment-intent
        // enviar os itens do carrinho

        const data = await createPaymentIntent({
          items,
          token: `${accessToken!}`,
        });

        // console.log('accessToken <><><><>???????', accessToken);

        // se eu receber freeGames: true => setFreeGames(true) e faco o fluxo de jogo gratuito
        if (data.freeGames) {
          setFreeGames(true);
          return;
        } else {
          setFreeGames(false);
        }

        // se eu receber um erro, setErro
        if (data.error) {
          setError(data.error);
          return;
        }

        // senao,  o paymentIntent foi valido
        // setClientSecrete
        await setClientSecret(data.client_secret);
        console.log('clientsecret: ', data.client_secret);
      }
    }

    setPaymentMode();
  }, [items, accessToken]);

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(!event.complete);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // se for freeGames
    if (freeGames) {
      // salva no banco
      // bater na API /orders

      // redireciona para success\
      push('/success');
      return;
    }

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!,
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setLoading(false);
    } else {
      setError(null);
      setLoading(false);

      // salvar a compra no banco do Strapi
      // bater na API /orders

      // redirecionar para a pagina de sucesso
      push('/success');
      console.log('Deu bom');
    }
  };

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading lineColor="primary" lineBottom color="black" size="small">
            Payment
          </Heading>

          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px',
                  },
                },
              }}
              onChange={handleChange}
            />
          )}
          {error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>
          <Button
            fullWidth
            icon={
              loading ? (
                <FormLoading src="/img/dots.svg" alt="Waiting..." />
              ) : (
                <ShoppingCart />
              )
            }
            disabled={!freeGames && (disabled || !!error)}
          >
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  );
};

export default PaymentForm;
