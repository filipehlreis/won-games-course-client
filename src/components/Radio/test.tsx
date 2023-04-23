import { screen, render, waitFor } from 'utils/test-utils';
import theme from 'styles/theme';
import { Radio } from '.';
import userEvent from '@testing-library/user-event';

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    const { container } = render(
      <Radio label="Radio" labelFor="check" value="anyValue" />,
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.white });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without label (black)', () => {
    render(<Radio label="Radio" labelColor="black" />);

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.black });
  });

  it('should render without label', () => {
    render(<Radio />);

    expect(screen.queryByText(/Radio/i)).not.toBeInTheDocument();
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    render(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByLabelText('Radio'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith('anyValue');
  });

  it('should be accessible with tab', async () => {
    render(<Radio label="Radio" labelFor="Radio" />);

    const radio = screen.getByLabelText('Radio');

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(radio).toHaveFocus();
  });
});
