import { useState } from 'react';

import {
  CheckCircleOutline,
  Email,
  ErrorOutline,
} from '@styled-icons/material-outlined';

import {
  FormError,
  FormLoading,
  FormSucess,
  FormWrapper,
} from 'components/Form';
import Button from 'components/Button';
import { TextField } from 'components/TextField';

import { FieldErrors, forgotValidate } from 'utils/validations';

export const FormForgotPassword = () => {
  const [sucess, setSucess] = useState(false);
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({ email: '' });
  const [loading, setLoading] = useState(false);

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

    setFieldError({});

    // enviar um token post para /forgot-password pedindo um email
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      },
    );

    const data = await response.json();
    setLoading(false);

    if (data.error) {
      const data_error =
        data.message[0].messages[0].message || 'An error occured';
      setFormError(data_error);
    } else {
      setSucess(true);
    }
  };

  return (
    <FormWrapper>
      {sucess ? (
        <FormSucess>
          <CheckCircleOutline />
          If provided email is a registered email ID on WonGames, you will
          receive an email with further instructions on how to reset your
          password. In case you didnt receive this email, you need to create a
          new account here.
        </FormSucess>
      ) : (
        <>
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
        </>
      )}
    </FormWrapper>
  );
};
