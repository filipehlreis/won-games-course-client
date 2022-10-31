import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Banner } from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1024x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner {...props} />);
    // verifique se o title existe renderizado (toBeInTheDocument())
    expect(
      screen.getByRole('heading', { name: /defy death/i }),
    ).toBeInTheDocument();
    // verifique se o subtitle existe renderizado
    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i }),
    ).toBeInTheDocument();
    // verifique se a imagem existe renderizado
    expect(
      screen.getByRole('img', { name: /defy death/i }),
    ).toBeInTheDocument();
  });
});
