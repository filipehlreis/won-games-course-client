/**
 * TODO: Need to understand and create a proper test for Apollo.
 * I tried to do alongside the class, but its return a empty body.
 * Probably it is because of lack of useQuery mock return.
 */

import { screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { renderWithTheme } from 'utils/tests/helpers';

import filterItemsMock from 'components/ExploreSidebar/mock';

import Games from '.';
import React from 'react';
import { QUERY_GAMES } from 'graphql/queries/games';
import { InMemoryCache } from '@apollo/client';

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>;
  },
}));

// jest.mock('components/GameCard', () => ({
//   __esModule: true,
//   default: function Mock() {
//     return <div data-testid="Mock GameCard" />;
//   },
// }));

const mocks = [
  {
    request: {
      query: QUERY_GAMES,
      variables: {
        limit: 15,
      },
    },
    result: {
      data: {
        games: {
          data: [
            {
              attributes: {
                name: 'The Evil Within Bundle',
                slug: 'the_evil_within_bundle',
                cover: {
                  url: '/uploads/the_evil_within_bundle_1756155b5c.jpg',
                },
                release_date: '2014-10-12',
                developers: {
                  name: 'Tango Gameworks',
                },
                price: 12,
              },
            },
          ],
        },
        __typename: 'GameEntityResponseCollection',
      },
    },
  },
];

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: {
          keyArgs: ['sort', 'where'],
          merge: true,
        },
      },
    },
  },
});

describe('<Games />', () => {
  it('should render loading when starting the template', async () => {
    const { container } = await renderWithTheme(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <Games filterItems={filterItemsMock} />,
      </MockedProvider>,
    );

    console.log('container', container.firstChild);
    screen.debug();

    expect(await screen.findByText(/loading/i)).toBeInTheDocument();

    // expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });
  /**/
  // itAsync('should render sections', () => {
  //   const { debug } = renderWithTheme(
  //     <MockedProvider
  //       mocks={[
  //         {
  //           request: {
  //             query: QUERY_GAMES,
  //             variables: { limit: 15 },
  //           },
  //           result: {
  //             data: {
  //               games: {
  //                 data: [
  //                   {
  //                     attributes: {
  //                       name: 'The Evil Within Bundle',
  //                       slug: 'the_evil_within_bundle',
  //                       cover: {
  //                         data: {
  //                           attributes: {
  //                             url: '/uploads/the_evil_within_bundle_1756155b5c.jpg',
  //                             // __typename: 'UploadFile',
  //                           },
  //                           // __typename: 'UploadFileEntity',
  //                         },
  //                         // __typename: 'UploadFileEntityResponse',
  //                       },
  //                       release_date: '2014-10-12',
  //                       developers: {
  //                         data: [
  //                           {
  //                             attributes: {
  //                               name: 'Tango Gameworks',
  //                               // __typename: 'Developer',
  //                             },
  //                             // __typename: 'DeveloperEntity',
  //                           },
  //                         ],
  //                         // __typename: 'DeveloperRelationResponseCollection',
  //                       },
  //                       price: 12,
  //                       // __typename: 'Game',
  //                     },
  //                     // __typename: 'GameEntity',
  //                   },
  //                 ],
  //                 __typename: 'GameEntityResponseCollection',
  //               },
  //             },
  //           },
  //         },
  //       ]}
  //       addTypename={false}
  //     >
  //       <Games filterItems={filterItemsMock} />,
  //     </MockedProvider>,
  //   );
  //   // expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument();
  //   // expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument();
  //   debug();
  //   // expect(screen.getByText(/loading/i)).toBeInTheDocument();
  //   expect(screen.findByText(/loading/i)).toBeInTheDocument();
  //   expect(screen.findByText(/The Evil Within Bundle/i)).toBeInTheDocument();
  //   // expect(
  //   //   screen.getByRole('button', { name: /show more/i }),
  //   // ).toBeInTheDocument();
  // });
});
