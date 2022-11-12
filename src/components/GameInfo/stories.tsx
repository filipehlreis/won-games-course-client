import { Story, Meta } from '@storybook/react/types-6-0';
import { GameInfo, GameInfoProps } from '.';

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: {
    title: 'My Game Title',
    description: 'My Game Description',
    price: '210,00',
  },
} as Meta;

export const Default: Story<GameInfoProps> = (props) => <GameInfo {...props} />;
