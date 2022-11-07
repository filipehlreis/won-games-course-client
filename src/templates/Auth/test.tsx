import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Auth } from '.';

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>,
    );

    // verifica se tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);
    // verifica se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: 'All your favorite games in one place',
      }),
    ).toBeInTheDocument();
    // verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: 'WON is the best and most complete gaming platform.',
      }),
    ).toBeInTheDocument();
    // verifica se tem o title do content
    expect(
      screen.getByRole('heading', { name: 'Auth Title' }),
    ).toBeInTheDocument();
    // verifica se o children ta sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
