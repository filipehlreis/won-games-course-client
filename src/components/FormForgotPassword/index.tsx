import { useState } from 'react';

import { Email, ErrorOutline } from '@styled-icons/material-outlined';

import { FormError, FormLoading, FormWrapper } from 'components/Form';
import Button from 'components/Button';
import { TextField } from 'components/TextField';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FieldErrors, forgotValidate } from 'utils/validations';

export const FormForgotPassword = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({ email: '' });
  const [loading, setLoading] = useState(false);

  const routes = useRouter();
  const { push, query } = routes;

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = forgotValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    // sign in
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`,
    });
    // console.log('result do signin', result);

    if (result?.url) {
      return push(result.url);
    }

    setLoading(false);

    // jogar o erro
    setFormError('username or password is invalid');
    console.error('email ou senha invalido');
  };

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline />
          {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="name"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? (
            <FormLoading src="/img/dots.svg" alt="Waiting..." />
          ) : (
            <span>Send email</span>
          )}
        </Button>
      </form>
    </FormWrapper>
  );
};
