import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
// import { concatPagination } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { useMemo } from 'react';
import apolloCache from './apolloCache';
import { Session } from 'next-auth';
import { GenericObject } from 'pages/api/auth/[...nextauth]';
// import { QueryGames_games, QueryGames } from '../graphql/generated/QueryGames';

// import { getToken } from 'next-auth/jwt';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient(session?: GenericObject | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  });

  // console.log('session do apollo', session);

  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.accessToken || clientSession?.jwt || '';
    const authorization = jwt ? `Bearer ${jwt}` : '';
    return { headers: { ...headers, authorization } };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    // link: new HttpLink({ uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql` }),
    cache: apolloCache,
  });
}

// function createApolloClient() {
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined',
//     link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
//     cache: new InMemoryCache({
//       typePolicies: {
//         Query: {
//           fields: {
//             games: concatPagination(['where', 'sort']),
//           },
//         },
//       },
//     }),
//   });
// }

// function createApolloClient() {
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined',
//     link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
//     cache: new InMemoryCache({
//       typePolicies: {
//         Query: {
//           fields: {
//             games: {
//               // Don't cache separate results based on
//               // any of this field's arguments.
//               keyArgs: false,

//               // Concatenate the incoming list items with
//               // the existing list items.
//               merge(existing = [], incoming: QueryGames_games) {
//                 // console.log('existing', existing);
//                 console.log('incoming', incoming.data);
//                 // data?.games?.data

//                 return [...existing, ...incoming.data];
//                 // return [...existing, ...incoming.data];
//               },
//             },
//           },
//         },
//       },
//     }),
//   });
// }

export function initializeApollo(initialState = {}, session?: Session | null) {
  // serve para verificar se ja existe uma isntancia ,para nao criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient(session);

  // recuperando os dados de cache
  if (Object.keys(initialState).length) {
    apolloClientGlobal.cache.restore(initialState);
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal;

  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = {}, session?: Session) {
  const store = useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session],
  );
  return store;
}
