import {
  // parseQueryStringToFilter,
  // parseQueryStringToWhere,
  parseQueryStringToWhereNew,
} from '.';

import { filterItems } from './games_filterItems';

// const queryString = {
//   price: Object({ lte: 600 }),
//   sort: 'price:asc',
//   and: [
//     Object({
//       platforms: Object({
//         name: Object({
//           containsi: 'mac',
//         }),
//       }),
//     }),
//     Object({
//       platforms: Object({
//         name: Object({
//           containsi: 'windows',
//         }),
//       }),
//     }),
//     Object({
//       platforms: Object({
//         name: Object({
//           containsi: 'linux',
//         }),
//       }),
//     }),
//   ],
// };

// const queryString = {
//   price_lte: 100,
//   platforms: ['windows', 'linux'],
//   developers: 'Rockstar Games',
//   sort: 'price:asc',
// };

const queryString = {
  price: 100,
  // platforms: ['mac', 'windows', 'linux'],
  platforms: ['mac', 'windows', 'linux'],
  categories: ['action'],
  sort: 'price:asc',
};

describe('parseQueryStringToWhereNew()', () => {
  it('should parse queryString to where format', () => {
    const parsedQuery = parseQueryStringToWhereNew({
      queryString,
      filterItems,
    });

    // console.log('parsedQuery do teste', parsedQuery);

    expect(parsedQuery).toStrictEqual({
      price: { lte: 100 },
      and: [
        {
          platforms: {
            name: {
              containsi: 'mac',
            },
          },
        },
        {
          platforms: {
            name: {
              containsi: 'windows',
            },
          },
        },
        {
          platforms: {
            name: {
              containsi: 'linux',
            },
          },
        },
        {
          categories: {
            name: {
              containsi: 'action',
            },
          },
        },
      ],
    });
  });
});

/**
 * Aula abaixo
//  */
// describe('parseQueryStringToWhere()', () => {
//   it('should parse queryString to where format', () => {
//     const parsedQuery = parseQueryStringToWhere({ queryString, filterItems });

//     console.log(parsedQuery);

//     expect(parsedQuery).toStrictEqual({
//       price_lte: 100,
//       platforms: { name_contains: ['windows', 'linux'] },
//       developers: { name_contains: 'Rockstar Games' },
//     });
//   });
// });

// describe('parseQueryStringToFilter()', () => {
//   it('should parse queryString to filter values format', () => {
//     const parsedQuery = parseQueryStringToFilter({ queryString, filterItems });

//     expect(parsedQuery).toStrictEqual({
//       price_lte: 100,
//       platforms: ['windows', 'linux'],
//       developers: ['Rockstar Games'],
//       sort: 'price:asc',
//     });
//   });
// });
