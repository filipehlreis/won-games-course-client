import { Story, Meta } from '@storybook/react/types-6-0';
import GameInfo, { GameInfoProps } from '.';
import mockGame from './mock';
import { CartContextData } from 'hooks/use-cart';

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: mockGame,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
);

export const IsInCart: Story<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true,
};
