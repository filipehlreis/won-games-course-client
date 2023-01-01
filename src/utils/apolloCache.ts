import { InMemoryCache } from '@apollo/client';

export default new InMemoryCache({
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
});
