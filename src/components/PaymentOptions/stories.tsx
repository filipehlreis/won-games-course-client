import { Story, Meta } from '@storybook/react/types-6-0';
import PaymentOptions, { PaymentOptionsProp } from '.';

import cardsMock from './mock';

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock,
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  argTypes: {
    handlePayment: {
      action: 'clicked',
    },
    cards: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Default: Story<PaymentOptionsProp> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
);
