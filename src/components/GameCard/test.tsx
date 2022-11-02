import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { GameCard } from '.';

const props = {
  title: 'Population Z',
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
      screen.getByRole('heading', { name: /population z/i }),
    ).toBeInTheDocument();

    // verificar se o developer foi renderizado
    expect(
      screen.getByRole('heading', { name: /rockstar games/i }),
    ).toBeInTheDocument();

    // verificar se o img foi renderizado
    expect(
      screen.getByRole('img', { name: /population z/i }),
    ).toBeInTheDocument();

    // verificar se o price foi renderizado
    expect(screen.getByText(`${props.price}`)).toBeInTheDocument();
  });
});
