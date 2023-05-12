import 'server.mock';
import { signIn } from 'next-auth/react';

import { FormResetPassword } from '.';
import { act, render, screen } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
let query = {};

useRouter.mockImplementation(() => ({
  query,
}));

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

describe('<FormResetPassword>', () => {
  it('should render the form', () => {
    render(<FormResetPassword />);

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/confirm password/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /reset password/i }),
    ).toBeInTheDocument();
  });

  it('should show validation errors', async () => {
    render(<FormResetPassword />);

    const passwordField = screen.getByPlaceholderText('Password');
    const passwordConfirmField = screen.getByPlaceholderText(/confirm/i);

    await act(async () => {
      await userEvent.type(passwordField, '123');
    });
    expect(passwordField).toHaveValue('123');

    await act(async () => {
      await userEvent.type(passwordConfirmField, '321');
    });
    expect(passwordConfirmField).toHaveValue('321');

    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: /reset password/i }),
      );
    });

    expect(
      await screen.findByText(/confirm password does not match with password/i),
    ).toBeInTheDocument();
  });

  it('should show error when code provided is wrong', async () => {
    query = { code: 'wrong_code' };

    render(<FormResetPassword />);
    const passwordField = screen.getByPlaceholderText('Password');
    const passwordConfirmField = screen.getByPlaceholderText(/confirm/i);

    await act(async () => {
      await userEvent.type(passwordField, '123');
    });
    expect(passwordField).toHaveValue('123');

    await act(async () => {
      await userEvent.type(passwordConfirmField, '123');
    });
    expect(passwordConfirmField).toHaveValue('123');

    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: /reset password/i }),
      );
    });

    expect(
      await screen.findByText(/Incorrect code provided./i),
    ).toBeInTheDocument();
  });

  it('should reset the password and sign in the user', async () => {
    //
    query = { code: 'right_code' };

    render(<FormResetPassword />);
    const passwordField = screen.getByPlaceholderText('Password');
    const passwordConfirmField = screen.getByPlaceholderText(/confirm/i);

    await act(async () => {
      await userEvent.type(passwordField, '123');
    });
    expect(passwordField).toHaveValue('123');

    await act(async () => {
      await userEvent.type(passwordConfirmField, '123');
    });
    expect(passwordConfirmField).toHaveValue('123');

    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: /reset password/i }),
      );
    });

    expect(signIn).toHaveBeenCalledWith('credentials', {
      email: 'valid@email.com',
      password: '123',
      callbackUrl: '/',
    });
  });
});
