import { useState } from 'react';

import { Lock, ErrorOutline } from '@styled-icons/material-outlined';

import { FormError, FormLoading, FormWrapper } from 'components/Form';
import Button from 'components/Button';
import { TextField } from 'components/TextField';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FieldErrors, resetValidate } from 'utils/validations';

export const FormResetPassword = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({ password: '', confirm_password: '' });
  const [loading, setLoading] = useState(false);

  const routes = useRouter();
  const { query } = routes;

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = resetValidate(values); // validate after

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: values.password,
          passwordConfirmation: values.confirm_password,
          code: query.code,
        }),
      },
    );

    const data = await response.json();

    if (data.error) {
      console.log('Error', data);
      setFormError(data.error.message);
      setLoading(false);
    } else {
      console.log('Sucess', data);
      console.log('email', data.user.email);
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/',
      });
    }

    // const result = await signIn('credentials', {
    //   ...values,
    //   redirect: false,
    //   callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`,
    // });
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
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? (
            <FormLoading src="/img/dots.svg" alt="Waiting..." />
          ) : (
            <span>Reset Password</span>
          )}
        </Button>
      </form>
    </FormWrapper>
  );
};
