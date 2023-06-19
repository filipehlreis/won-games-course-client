import { GetServerSidePropsContext } from 'next';

import Profile from 'templates/Profile';
import FormProfile, { FormProfileProps } from 'components/FormProfile';
import protectedRoutes from 'utils/protected-routes';

import { initializeApollo } from 'utils/apollo';
import {
  QueryProfileMe,
  QueryProfileMeVariables,
} from 'graphql/generated/QueryProfileMe';
import {
  QUERY_GET_ID_FROM_USERS_FILTER,
  QUERY_PROFILE_ME,
} from 'graphql/queries/profile';
import {
  QueryGetIDFromUserFilter,
  QueryGetIDFromUserFilterVariables,
} from 'graphql/generated/QueryGetIDFromUserFilter';

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = await initializeApollo({}, session);

  console.log(
    '?????????????????????session do profile me???????????????????????',
    session,
  );

  const { data: data_getid } = await apolloClient.query<
    QueryGetIDFromUserFilter,
    QueryGetIDFromUserFilterVariables
  >({
    query: QUERY_GET_ID_FROM_USERS_FILTER,
    variables: {
      input: {
        email: {
          eq: session?.user?.email as string,
        },
        username: {
          eq: session?.user?.name as string,
        },
      },
    },
  });

  const { data } = await apolloClient.query<
    QueryProfileMe,
    QueryProfileMeVariables
  >({
    query: QUERY_PROFILE_ME,
    variables: {
      identifier: data_getid.usersPermissionsUsers?.data[0].id as string,
    },
  });

  return {
    props: {
      session,
      username: data.usersPermissionsUser?.data?.attributes?.username,
      email: data.usersPermissionsUser?.data?.attributes?.email,
    },
  };
}
