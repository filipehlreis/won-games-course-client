import { NextApiRequest, NextApiResponse } from 'next';
import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
// import Providers from 'next-auth/providers';
import CredentialsProvider from 'next-auth/providers/credentials';

export interface GenericObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const options: AuthOptions = {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
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
          const objeto = { ...data.user, jwt: data.jwt };
          return objeto;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }: GenericObject) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.username = user.username;
      }
      if (user) {
        token.accessToken = await user.jwt;
      }

      return token;
    },
    async session({ session, token }: GenericObject) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      session.user.name = token.username;

      return session;
    },

    // callbacks: {
    //   session: async ({ session, user }: GenericObject) => {
    //     session.jwt = user.jwt;
    //     session.id = user.id;
    //     return session;
    //     // return Promise.resolve(session);
    //   },
    //   jwt: async ({ token, user }: GenericObject) => {
    //     if (user) {
    //       token.id = user.id;
    //       token.email = user.email;
    //       token.name = user.username;
    //       token.jwt = user.jwt;
    //     }

    //     return token;
    //     // return Promise.resolve(token);
    //   },
    // },

    // callbacks: {
    //   async session({ session, user }: GenericObject) {
    //     session.jwt = user.jwt;
    //     session.id = user.id;
    //     return session;
    //     // return Promise.resolve(session);
    //   },
    //   async jwt({ token, user }: GenericObject) {
    //     if (user) {
    //       token.id = user.id;
    //       token.email = user.email;
    //       token.name = user.username;
    //       token.jwt = user.jwt;
    //     }

    //     return token;
    //     // return Promise.resolve(token);
    //   },
    // },
  },
  session: {
    strategy: 'jwt',
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
