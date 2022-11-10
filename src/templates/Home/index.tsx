import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';
import { BannerSlider } from 'components/BannerSlider';

import * as S from './styles';
import { Showcase } from 'components/Showcase';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  upcommingMoreGames: GameCardProps[];
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
  upcommingMoreGames,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="News" games={newGames} />
      </S.SectionNews>

      <Showcase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <S.SectionUpcomming>
        <Showcase title="Upcomming" games={upcommingGames} />
        <Showcase highlight={upcommingHighlight} games={upcommingMoreGames} />
      </S.SectionUpcomming>

      <Showcase
        title="Free Games"
        highlight={freeHighlight}
        games={freeGames}
      />

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
};
