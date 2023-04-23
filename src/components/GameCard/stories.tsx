import { Story, Meta } from '@storybook/react/types-6-0';
import GameCard, { GameCardProps } from '.';
import { CartContextData } from 'hooks/use-cart';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235.0,
    promotionalPrice: 199.9,
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' },
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const IsInCart: Story<GameCardProps & CartContextData> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true,
};

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary',
};
