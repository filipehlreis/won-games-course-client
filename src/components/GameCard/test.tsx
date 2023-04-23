import { screen, render, fireEvent } from 'utils/test-utils';
import GameCard from '.';

const props = {
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235.0,
};

describe('<GameCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`,
    );

    expect(screen.getByText(`${'$235.00'}`)).toBeInTheDocument();
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render price in label', () => {
    render(<GameCard {...props} />);
    const price = screen.getByText('$235.00');

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(price).toHaveStyle('backgroundColor: #3CD3C1');
  });

  it('should render FREE in price label', () => {
    render(<GameCard {...props} price={0.0} />);
    const price = screen.getByText('Free');

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(price).toHaveStyle('backgroundColor: #3CD3C1');
  });

  it('should render FREE in promotional price label', () => {
    render(<GameCard {...props} promotionalPrice={0.0} />);
    const promotionalPrice = screen.getByText('Free');
    const price = screen.getByText('$235.00');

    expect(price).toHaveStyle({ textDecoration: 'line-through' });

    expect(promotionalPrice).not.toHaveStyle({
      textDecoration: 'line-through',
    });
    expect(promotionalPrice).toHaveStyle('backgroundColor: #3CD3C1');
  });

  it('should render a line-through in price when promotional', () => {
    render(<GameCard {...props} promotionalPrice={199.0} />);
    const price = screen.getByText('$235.00');
    const promotionalPrice = screen.getByText('$199.00');

    expect(price).toHaveStyle({ textDecoration: 'line-through' });
    expect(promotionalPrice).not.toHaveStyle({
      textDecoration: 'line-through',
    });
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    render(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();
    render(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(onFav).toBeCalled();
  });

  it('should render Ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />,
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
    expect(ribbon).toBeInTheDocument();
  });
});
