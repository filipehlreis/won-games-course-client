import { NextApiRequest, NextApiResponse } from 'next';
// import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
// import Providers from 'next-auth/providers';
import CredentialsProvider from 'next-auth/providers/credentials';

interface GenericObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const options = {
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Sign-In',
      credentials: {},
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({
              identifier: email,
              password: password,
            }),
          },
        );

        const data = await response.json();

        if (data.user) {
          return { ...data.user, jwt: data.jwt };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user }: GenericObject) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    },
    jwt: async ({ token, user }: GenericObject) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.username;
        token.jwt = user.jwt;
      }

      return Promise.resolve(token);
    },
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
