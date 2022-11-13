import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  platforms: ['windows', 'linux', 'mac'],
  releaseDate: '2020-11-21T23:00:00',
};

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(
      screen.getByRole('heading', { name: /developer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /release date/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /platforms/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /publisher/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /rating/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /genres/i }),
    ).toBeInTheDocument();
  });

  it('should render icons platform', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });
});
