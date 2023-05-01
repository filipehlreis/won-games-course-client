import { screen, render } from 'utils/test-utils';
import Base from '.';

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => {
    return [{ session: null, status: null }];
  }),
}));

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>;
    },
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>;
    },
  };
});

describe('<Base />', () => {
  it('should render the menu, footer and children', () => {
    render(
      <Base>
        <h1>Heading</h1>
      </Base>,
    );

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /heading/i }),
    ).toBeInTheDocument();
  });
});
