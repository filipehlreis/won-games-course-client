import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { TextField } from '.';
import userEvent from '@testing-library/user-event';
import { Email } from '@styled-icons/material-outlined';

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />);

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument();
  });

  //

  it('should render without label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument();
  });

  //

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText(/hey you/i)).toBeInTheDocument();
  });

  //

  it('should changes its value when typing', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />,
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('should be accessible with tab', async () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />,
    );
    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should render a icon version', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });
});
