import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  console.log('session', session);

  if (!session) {
    context.res.writeHead(302, {
      Location: `/sign-in?callbackUrl=${context.resolvedUrl}`,
    });
    context.res.end();

    // context.res.setHeader(
    //   'Location',
    //   `/sign-in?callbackUrl=${context.resolvedUrl}`,
    // );

    // context.res.statusCode = 302;
  }

  console.log('session', session);

  return session;
}

export default protectedRoutes;
