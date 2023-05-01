import userEvent from '@testing-library/user-event';
import { screen, render } from 'utils/test-utils';
import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Filipe" />);

    expect(screen.getByText(/filipe/i)).toBeInTheDocument();
  });

  it('should render the menu', async () => {
    render(<UserDropdown username="Filipe" />);

    // open menu
    await userEvent.click(screen.getByText(/filipe/i));

    expect(
      screen.getByRole('link', { name: /my profile/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign out/i }),
    ).toBeInTheDocument();
  });
});
