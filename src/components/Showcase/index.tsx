import { GameCardProps } from 'components/GameCard';
import { GameCardSlider } from 'components/GameCardSlider';
import { Heading } from 'components/Heading';
import { Highlight, HighlightProps } from 'components/Highlight';

import * as S from './styles';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
};

export const Showcase = ({ title, highlight, games }: ShowcaseProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      {!!highlight && <Highlight {...highlight} />}
      {!!games && <GameCardSlider items={games} />}
    </S.Wrapper>
  );
};
