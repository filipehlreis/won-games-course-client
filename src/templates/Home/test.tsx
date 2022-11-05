import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import { Home } from '.';

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    //fotter
    expect(
      screen.getByRole('heading', { name: /contact us/i }),
    ).toBeInTheDocument();

    // logos (menu / footer)
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    // should render the sections
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcomming/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /free games/i }),
    ).toBeInTheDocument();

    // should render section elements
    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    // card game( 5sections com 4 cards cada = 5x4 = 20)
    // card game( 5sections com 1 cards cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
    // highlight
    expect(screen.getAllByText(/read dead it's back/i)).toHaveLength(3);
  });
});
