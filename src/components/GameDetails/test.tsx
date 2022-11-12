// import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameDetails from '.';

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<GameDetails />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
