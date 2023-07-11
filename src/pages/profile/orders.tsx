import OrdersList, { OrdersListProps } from 'components/OrdersList';
import Profile from 'templates/Profile';

import protectedRoutes from 'utils/protected-routes';
import { GetServerSidePropsContext } from 'next';
import { initializeApollo } from 'utils/apollo';
import {
  QueryOrders,
  QueryOrdersVariables,
} from 'graphql/generated/QueryOrders';
import { QUERY_ORDERS } from 'graphql/queries/orders';
import {
  QueryGetIDFromUserFilter,
  QueryGetIDFromUserFilterVariables,
} from 'graphql/generated/QueryGetIDFromUserFilter';
import { QUERY_GET_ID_FROM_USERS_FILTER } from 'graphql/queries/profile';
import { ordersMapper } from 'utils/mappers';

export default function ProfileOrders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  const apolloClient = initializeApollo({}, session);

  if (!session) {
    return { props: {} };
  }

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

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: data_getid.usersPermissionsUsers?.data[0].id as string,
    },
    fetchPolicy: 'no-cache',
  });

  return {
    props: {
      items: ordersMapper(data.orders?.data),
    },
  };
}
