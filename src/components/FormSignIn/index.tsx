import { useState } from 'react';
import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';

import { FormLink, FormLoading, FormWrapper } from 'components/Form';
import Button from 'components/Button';
import { TextField } from 'components/TextField';

import * as S from './styles';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export const FormSignIn = () => {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // sign in
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/',
    });
    // console.log('result do signin', result);

    if (result?.url) {
      return push(result.url);
    }

    setLoading(false);

    // jogar o erro
    console.error('email ou senha invalido');
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="name"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? (
            <FormLoading src="/img/dots.svg" alt="Waiting..." />
          ) : (
            <span> Sign in now</span>
          )}
        </Button>

        <FormLink>
          Don&apos;t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};
