import { screen, render } from 'utils/test-utils';
import { FormSignUp } from '.';
import { MockedProvider } from '@apollo/client/testing';

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>,
    );

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign up now/i }),
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render the text and link to sign up', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>,
    );

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute(
      'href',
      '/sign-in',
    );
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument();
  });
});
