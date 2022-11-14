import 'match-media-mock';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import mockItems from './mock';

import Gallery from '.';

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    ).toHaveAttribute('src', mockItems[0].src);
    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i }),
    ).toHaveAttribute('src', mockItems[1].src);
  });

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    // selecionar o nosso menuFull
    const modal = screen.getByLabelText('modal');

    // verificar se o menu ta escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });

    // clicar no botao de abrir o menu e verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });

    // // clicar no botao de fechar o menu e verificar se ele fechou
    // fireEvent.click(screen.getByLabelText(/close menu/i));
    // expect(modal.getAttribute('aria-hidden')).toBe('true');
    // expect(modal).toHaveStyle({ opacity: 0 });
  });
});
