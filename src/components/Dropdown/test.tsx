import { screen, render, act, waitFor } from 'utils/test-utils';

import userEvent from '@testing-library/user-event';

import Dropdown from '.';

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Click here</h1>;

    render(
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

    act(() => {
      userEvent.click(screen.getByLabelText(/toogle dropdown/));
    });

    waitFor(() => {
      expect(content).toHaveStyle({ opacity: 1 });
      expect(content.getAttribute('aria-hidden')).toBe('false');
    });
  });

  it('should handle open/close dropdown when clicking on overlay', async () => {
    const content = screen.getByText(/content/i).parentElement!;
    const overlay = content.nextElementSibling;

    act(() => {
      userEvent.click(screen.getByLabelText(/toogle dropdown/));
    });

    waitFor(() => {
      expect(overlay).toHaveStyle({ opacity: 1 });
      expect(overlay!.getAttribute('aria-hidden')).toBe('false');
    });

    act(() => {
      userEvent.click(overlay!);
    });

    waitFor(() => {
      expect(overlay).toHaveStyle({ opacity: 0 });
      expect(overlay!.getAttribute('aria-hidden')).toBe('true');
    });
  });
});
