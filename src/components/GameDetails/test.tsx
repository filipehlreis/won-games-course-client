import { screen, render } from 'utils/test-utils';
import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Walkthrough',
  platforms: ['windows', 'linux', 'mac'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative'],
};

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />);

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
    render(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('should render FREE rating when BR0', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should render 10+ rating when BR10', () => {
    render(<GameDetails {...props} rating="BR10" />);

    expect(screen.getByText(/10\+/i)).toBeInTheDocument();
  });

  it('should render 12+ rating when BR12', () => {
    render(<GameDetails {...props} rating="BR12" />);

    expect(screen.getByText(/12\+/i)).toBeInTheDocument();
  });

  it('should render 14+ rating when BR14', () => {
    render(<GameDetails {...props} rating="BR14" />);

    expect(screen.getByText(/14\+/i)).toBeInTheDocument();
  });

  it('should render 16+ rating when BR16', () => {
    render(<GameDetails {...props} rating="BR16" />);

    expect(screen.getByText(/16\+/i)).toBeInTheDocument();
  });

  it('should render the developer', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument();
  });

  it('should render the publisher', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText(/Walkthrough/i)).toBeInTheDocument();
  });

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('should render the formated date', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText(/role-playing \/ narrative/i)).toBeInTheDocument();
  });
});
