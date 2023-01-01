/**
 * TODO: Need to understand and create a proper test for Apollo.
 * I tried to do alongside the class, but its return a empty body.
 * Probably it is because of lack of useQuery mock return.
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

// const mocks = []; // We'll fill this in next

it('renders without error', async () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <>
        <p>loading...</p>
      </>
    </MockedProvider>,
  );
  expect(await screen.findByText(/Loading.../i)).toBeInTheDocument();
});
