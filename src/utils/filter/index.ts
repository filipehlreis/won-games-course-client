/* eslint-disable prettier/prettier */
import { ItemProps } from 'components/ExploreSidebar';
import { GameFiltersInput } from 'graphql/generated/globalTypes';
import { ParsedUrlQueryInput } from 'querystring';

type ParseArgs = {
  queryString: ParsedUrlQueryInput;
  filterItems: Pick<ItemProps, 'type' | 'name'>[];
};



/**
 *
 *
 * TODO: It's necessary to create a Sort method to fix the duplicated results
 * when fetching more games.
 *
 *
 *
 *
 */







/**
 *
 * queryString
 * price_lte=0&platforms=windows&platforms=linux&categories=sports&sort=price%3Aasc

 para

 where

      price: { lte: 600 },
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
      ],

 */

// const queryString = {
//   price_lte: 100,
//   platforms: ['mac', 'windows', 'linux'],
//   sort: 'price:asc',
// };

export const parseQueryStringToWhereNew = ({
  queryString,
  // filterItems,
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: GameFiltersInput = {};

  // console.log('queryString dentro da funcao', queryString);

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {

      // console.log('entrei na funcao parseQueryStringToWhereNew()')
      // const item = filterItems?.find((item) => item.name === key);
      // const isCheckbox = item?.type === 'checkbox';

      // console.log('isCheckbox', isCheckbox, 'item', item);
      // console.log('key', key);
      // console.log('item da funcao', item);
      // console.log('queryString[key] da funcao', queryString[key]);
      // const queryStringVetor = Array.isArray(queryString[key]) ? queryString[key] : [queryString[key]]
      // ? Object({ and: queryString[key] })
      // obj['and'] = !isCheckbox
      //   ? queryString[key]
      //   : [Object({ [key]: Object({ containsi: queryString[key] }) })];

      key === 'price' && (obj.price = Object({ lte: Number(queryString[key]) }));
      // key === 'platforms' && (

      //   obj.and = Object({ platforms: { containsi: queryString[key] } })
      // );

      const queryStringVetor = Array.isArray(queryString[key]) ? queryString[key] : [queryString[key]]

      key === 'categories' && (
        <[]>queryStringVetor).map((value: string) => {
          obj.and?.length
            ? obj.and?.push({ categories: { name: { containsi: value } } })
            : obj.and = [{ categories: { name: { containsi: value } } }]
        }
        );

      key === 'platforms' && (
        <[]>queryStringVetor).map((value: string) => {
          obj.and?.length
            ? obj.and?.push({ platforms: { name: { containsi: value } } })
            : obj.and = [{ platforms: { name: { containsi: value } } }]
        }
        );

      // !isCheckbox
      //   ? (obj[key] =
      //     key === 'price'
      //       ? Object({ lte: queryString[key] })
      //       : queryString[key])
      //   : (
      //     queryString[key]?.map((valor: string) => {
      //       obj.and = [Object({ [key]: Object({ containsi: valor }) }),]
      //     })
      //   );

      // obj[key] = !isCheckbox
      //   ? key === 'price'
      //     ? Object({ lte: queryString[key] })
      //     : queryString[key]
      //   : [Object({ [key]: Object({ containsi: queryString[key] }) })];

      // console.log('obj[key] da funcao', obj[key]);
    });

  // console.log('obj da funcao', JSON.stringify(obj, null, 4));

  // console.log('\n\nimprimindo objeto', JSON.stringify(obj, null, 4))
  return obj;
};

// export const parseQueryStringToWhere = ({
//   queryString,
//   filterItems,
// }: ParseArgs) => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const obj: any = {};
//   // console.log('queryString', queryString);

//   Object.keys(queryString)
//     .filter((item) => item !== 'sort')
//     .forEach((key) => {
//       const item = filterItems?.find((item) => item.name === key);
//       const isCheckbox = item?.type === 'checkbox';

//       obj[key] = !isCheckbox
//         ? queryString[key]
//         : { name_contains: queryString[key] };
//     });

//   // console.log('obj', obj);

//   return obj;
// };

export const parseQueryStringToFilter = ({
  queryString,
  filterItems,
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {};

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key);
    const isCheckbox = item?.type === 'checkbox';
    const isArray = Array.isArray(queryString[key]);

    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key];
  });

  return obj;
};

/**
 *
 *
 *
 *
 *
 *
 */

// const objeto = {
//   limit: 200,
//   sort: 'price:desc',
//   filters: {
//     price: { lte: 600 },
//     and: [
//       {
//         platforms: {
//           name: {
//             containsi: 'mac',
//           },
//         },
//       },
//       {
//         platforms: {
//           name: {
//             containsi: 'windows',
//           },
//         },
//       },
//       {
//         platforms: {
//           name: {
//             containsi: 'linux',
//           },
//         },
//       },
//       {
//         categories: {
//           name: {
//             containsi: 'adventure',
//           },
//         },
//       },
//       {
//         categories: {
//           name: {
//             containsi: 'fantasy',
//           },
//         },
//       },
//       {
//         categories: {
//           name: {
//             containsi: 'action',
//           },
//         },
//       },
//     ],
//   },
// };

/**
 *
 *
 *
 *
 *
 */

// import { ItemProps } from 'components/ExploreSidebar';
// import { ParsedUrlQueryInput } from 'querystring';

// type ParseArgs = {
//   queryString: ParsedUrlQueryInput;
//   filterItems: Pick<ItemProps, 'type' | 'name'>[];
// };

// export const parseQueryStringToWhere = ({
//   queryString,
//   filterItems,
// }: ParseArgs) => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const obj: any = {};
//   console.log('queryString', queryString);

//   Object.keys(queryString)
//     .filter((item) => item !== 'sort')
//     .forEach((key) => {
//       const item = filterItems?.find((item) => item.name === key);
//       const isCheckbox = item?.type === 'checkbox';

//       obj[key] = !isCheckbox
//         ? queryString[key]
//         : { name_contains: queryString[key] };
//     });

//   console.log('obj', obj);

//   return obj;
// };

// export const parseQueryStringToFilter = ({
//   queryString,
//   filterItems,
// }: ParseArgs) => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const obj: any = {};

//   Object.keys(queryString).forEach((key) => {
//     const item = filterItems?.find((item) => item.name === key);
//     const isCheckbox = item?.type === 'checkbox';
//     const isArray = Array.isArray(queryString[key]);

//     obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key];
//   });
//   return obj;
// };
