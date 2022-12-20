import Base from 'templates/Base';

import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import { Container } from 'components/Container';
import BannerSlider from 'components/BannerSlider';
import Showcase from 'components/Showcase';

import * as S from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

export const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="News" games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title="Upcomming"
        games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <Showcase
        title="Free Games"
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  );
};
