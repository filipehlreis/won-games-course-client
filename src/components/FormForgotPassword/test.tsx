import 'server.mock';
import { render, screen, act } from 'utils/test-utils';

import { FormForgotPassword } from '.';
import userEvent from '@testing-library/user-event';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

let query = {};
useRouter.mockImplementation(() => ({
  query,
}));

describe('<FormForgotPassword', () => {
  it('should render the form', () => {
    render(<FormForgotPassword />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /send email/i }),
    ).toBeInTheDocument();
  });

  it('should validate the email', async () => {
    render(<FormForgotPassword />);

    const emailField = screen.getByPlaceholderText(/email/i);

    await act(async () => {
      await userEvent.type(emailField, 'valid@email.com');
    });
    expect(emailField).toHaveValue('valid@email.com');

    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: /send email/i }),
      );
    });

    expect(
      await screen.findByText(/If provided email is a registered email/i),
    ).toBeInTheDocument();
  });

  it('should show an invalidate email', async () => {
    render(<FormForgotPassword />);
    const emailField = screen.getByPlaceholderText(/email/i);

    await act(async () => {
      await userEvent.type(emailField, 'invalid');
    });
    expect(emailField).toHaveValue('invalid');

    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: /send email/i }),
      );
    });

    expect(
      await screen.findByText(/must be a valid email/i),
    ).toBeInTheDocument();
  });

  it('should show an invalidate email error', async () => {
    render(<FormForgotPassword />);
    const emailField = screen.getByPlaceholderText(/email/i);

    await act(async () => {
      await userEvent.type(emailField, 'false@email.com');
    });
    expect(emailField).toHaveValue('false@email.com');

    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: /send email/i }),
      );
    });

    expect(
      await screen.findByText(/This email does not exist/i),
    ).toBeInTheDocument();
  });

  it('should autofill if comes via logged user', () => {
    query = { email: 'valid@email.com' };
    render(<FormForgotPassword />);

    expect(screen.getByPlaceholderText(/email/i)).toHaveValue(
      'valid@email.com',
    );
  });
});
