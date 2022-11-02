import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { GameCard } from '.';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
};

describe('<GameCard />', () => {
  it('should render the heading', () => {
    // renderizar o GameCard
    renderWithTheme(<GameCard {...props} />);
    // verificar se o title foi renderizado
    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    // verificar se o developer foi renderizado
    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument();

    // verificar se o img foi renderizado
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );

    // verificar se o price foi renderizado
    expect(screen.getByText(`${props.price}`)).toBeInTheDocument();

    // verificar se o botaozinho foi renderizado
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    // renderiza o componente
    // preco nao tenha o corte line-through
    // preco tenha o background secundario
  });

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente (Com promotionalPrice) // 200 reais // 15 reais
    // preco tenha o corte line-through (200)
    // preco novo promocional nao vai ter line-through (15)
  });
});
