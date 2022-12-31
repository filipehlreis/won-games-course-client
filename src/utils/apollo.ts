import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
// import { concatPagination } from '@apollo/client/utilities';
import { useMemo } from 'react';
// import { QueryGames_games, QueryGames } from '../graphql/generated/QueryGames';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            games: {
              keyArgs: ['sort', 'filters'],
              merge: true,
            },
          },
        },
      },
    }),
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

export function initializeApollo(initialState = {}) {
  // serve para verificar se ja existe uma isntancia ,para nao criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  // recuperando os dados de cache
  if (Object.keys(initialState).length) {
    apolloClientGlobal.cache.restore(initialState);
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal;

  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
