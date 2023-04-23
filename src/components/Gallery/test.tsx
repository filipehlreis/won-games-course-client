import 'match-media-mock';
import { screen, render, fireEvent } from 'utils/test-utils';
import mockItems from './mock';

import Gallery from '.';

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    ).toHaveAttribute('src', mockItems[0].src);
    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i }),
    ).toHaveAttribute('src', mockItems[1].src);
  });

  it('should handle open modal', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />);

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal');

    // verificar se o modal ta escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });

    // clicar no botao de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('should open modal with selected image', async () => {
    render(<Gallery items={mockItems.slice(0, 2)} />);

    // clicar no thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 2/i }),
    );

    // espero que a imagem da thumbnail seja aberta
    const img = await screen.findByRole('img', { name: /gallery image 2/i });
    expect(img.parentElement?.parentElement).toHaveClass('slick-active');
  });

  it('should handle close modal when overlay or button clicked', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />);

    // selecionar o nosso menuFull
    const modal = screen.getByLabelText('modal');

    // clicar no botao de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });

    // clicar para fechar o modal
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should handle close modal when ESC Escape button is pressed', () => {
    const { container } = render(<Gallery items={mockItems.slice(0, 2)} />);

    // selecionar o nosso menuFull
    const modal = screen.getByLabelText('modal');

    // clicar no botao de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });

    // clicar para fechar o modal
    fireEvent.keyUp(container, { key: 'Escape' });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });
});
