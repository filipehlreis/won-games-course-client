import { Story, Meta } from '@storybook/react/types-6-0';
import { GameInfo, GameInfoProps } from '.';

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: {
    title: 'My game info',
    description: 'My game description',
    price: 'R$210.00',
  },
} as Meta;

export const Default: Story<GameInfoProps> = (props) => <GameInfo {...props} />;
