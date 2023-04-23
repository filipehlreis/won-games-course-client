import { CartContextDefaultValues } from 'hooks/use-cart';
import CartButton from '.';
import { fireEvent, render, screen } from 'utils/test-utils';

describe('<CartButton />', () => {
  it('should render button to add and call the method if clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn(),
    };

    render(<CartButton id="1" />, { cartProviderProps });

    const button = screen.getByLabelText(/add to cart/i);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1');
  });

  it('should render button to remove and call the method if clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn(),
    };

    render(<CartButton id="1" />, { cartProviderProps });

    const button = screen.getByLabelText(/remove from cart/i);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1');
  });
});
