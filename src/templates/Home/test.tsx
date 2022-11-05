import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import { Home } from '.';

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighlight: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact us/i }),
    ).toBeInTheDocument();
  });

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />);

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
  });

  it('should render section elements', () => {
    renderWithTheme(<Home {...props} />);
    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    // card game( 5sections com 4 cards cada = 5x4 = 20)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(20);
    // highlight
    expect(screen.getAllByText(/read dead it's back/i)).toHaveLength(3);
  });
});
