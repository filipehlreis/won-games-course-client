import { PaymentIntent } from '@stripe/stripe-js';
import { CartItem } from 'hooks/use-cart';

type FetcherParams = {
  url: string;
  body: string;
  token: string;
};

const fetcher = async ({ url, body, token }: FetcherParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${url}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body,
  });

  return await response.json();
};

type PaymentIntentParams = {
  items: CartItem[];
  token: string;
};

export const createPaymentIntent = async ({
  items,
  token,
}: PaymentIntentParams) => {
  return await fetcher({
    url: '/orders/create-payment-intent',
    body: JSON.stringify({ cart: items }),
    token: token,
  });
};

type CreatePaymentParams = {
  items: CartItem[];
  paymentIntent?: PaymentIntent;
  token: string;
};

export const createPayment = async ({
  items,
  paymentIntent,
  token,
}: CreatePaymentParams) => {
  //
  return await fetcher({
    url: '/orders',
    body: JSON.stringify({
      cart: items,
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method,
    }),
    token: token,
  });
};

// const response = await fetch(
//   `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
//   {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(values),
//   },
// );
