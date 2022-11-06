import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';
import { Checkbox } from '.';
import userEvent from '@testing-library/user-event';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />,
    );

    // input a partir do papel / role
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    // input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    // label a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without label', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
  });

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />,
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black,
    });
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', async () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
