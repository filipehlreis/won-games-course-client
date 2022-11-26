import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import Dropdown from '.';

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Click here</h1>;

    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>,
    );
  });

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle dropdown/i)).toBeInTheDocument();
  });

  it('should handle open/close dropdown', async () => {
    const content = screen.getByText(/content/i).parentElement!;

    expect(content).toHaveStyle({ opacity: 0 });
    expect(content.getAttribute('aria-hidden')).toBe('true');

    await userEvent.click(screen.getByLabelText(/toogle dropdown/));

    expect(content).toHaveStyle({ opacity: 1 });
    expect(content.getAttribute('aria-hidden')).toBe('false');
  });
});
