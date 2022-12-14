import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { FormSignIn } from '.';

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    // verifique o email
    // verifique password
    // verifique button

    const { container } = renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in now/i }),
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />);
    expect(
      screen.getByRole('link', { name: /Forgot your password/i }),
    ).toBeInTheDocument();
  });

  it('should render the text and link to sign up', () => {
    // text
    // link

    renderWithTheme(<FormSignIn />);

    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign up/i })).toHaveAttribute(
      'href',
      '/sign-up',
    );
    expect(screen.getByText(/don't have an account\?/i)).toBeInTheDocument();
  });
});
