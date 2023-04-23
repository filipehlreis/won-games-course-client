import 'match-media-mock';
import { screen, render } from 'utils/test-utils';
import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import { Home } from '.';

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  newGamesTitle: 'New Games',
  mostPopularGamesTitle: 'Popular Games',
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGamesTitle: 'Upcoming Games',
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  freeGamesTitle: 'Free Games',
  freeGames: gamesMock,
  freeHighlight: highlightMock,
};

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    },
  };
});
jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>;
    },
  };
});

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    render(<Home {...props} />);

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4);
  });
});
