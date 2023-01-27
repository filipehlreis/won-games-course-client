/**
 * TODO: Need to understand and create a proper test for Apollo.
 * I tried to do alongside the class, but its return a empty body.
 * Probably it is because of lack of useQuery mock return.
 */

import { screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { InMemoryCache } from '@apollo/client';

import { renderWithTheme } from 'utils/tests/helpers';
import filterItemsMock from 'components/ExploreSidebar/mock';
import { fetchMoreMock, gamesMock, noGamesMock } from './mocks';

import userEvent from '@testing-library/user-event';
import Games from '.';
import apolloCache from 'utils/apolloCache';

/**
 * Aula 387 - More tests to do
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',
}));

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

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
  //   // expect(screen.findByText(/Price/i)).toBeInTheDocument();
  //   // expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument();
  //   debug();
  //   // expect(screen.getByText(/loading/i)).toBeInTheDocument(); // remover tambem pois foi removido o loading
  //   expect(screen.findByText(/loading/i)).toBeInTheDocument();
  //   expect(screen.findByText(/The Evil Within Bundle/i)).toBeInTheDocument();
  //   // expect(
  //   //   screen.getByRole('button', { name: /show more/i }),
  //   // ).toBeInTheDocument();
  // });

  it('should render empty when no games found', async () => {
    renderWithTheme(
      <MockedProvider mocks={[noGamesMock]} addTypename={false} cache={cache}>
        <Games filterItems={filterItemsMock} />,
      </MockedProvider>,
    );

    expect(
      await screen.findByText(/We didn't find any games with this filter/i),
    ).toBeInTheDocument();
  });

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />,
      </MockedProvider>,
    );

    expect(await screen.findByText(/sample game/i)).toBeInTheDocument();
    screen.logTestingPlaygroundURL();

    userEvent.click(await screen.findByRole('button', { name: /show more/i }));

    expect(await screen.findByText(/fetch more game/i)).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });

  it('should change push router when selecting a filter', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />,
      </MockedProvider>,
    );

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }));
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }));
    userEvent.click(await screen.findByLabelText(/low to high/i));

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' },
    });
  });
});
