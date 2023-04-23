import 'match-media-mock';
import { screen, render } from 'utils/test-utils';
import itemsMock from 'components/CartList/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import cardsMock from 'components/PaymentOptions/mock';

import Cart from '.';
import React from 'react';

const props = {
  items: itemsMock,
  total: 'R$ 430,00',
  cards: cardsMock,
  recommendedGames: gamesMock,
  recommendedTitle: 'You may like these games',
  recommendedHighlight: highlightMock,
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Cart" />;
  },
}));

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions" />;
  },
}));

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

describe('<Cart />', () => {
  it('should render sections', () => {
    render(<Cart {...props} />);

    expect(
      screen.getByRole('heading', { name: /my cart/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument();
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument();
  });

  it('should render empty section if there are no items', () => {
    render(<Cart {...props} items={[]} />);

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });
});
