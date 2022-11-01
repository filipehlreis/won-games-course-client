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
    const { container } = renderWithTheme(<Banner {...props} />);
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

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />,
    );

    const ribbon = screen.getByText(/My Ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
