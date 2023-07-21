
describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/cyberpunk_2077')


    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /Cyberpunk 2077/i }).should('exist');
      cy.findByText(/^This game is part of your Welcome Offer!/i).should('exist');
      cy.findByText('$199.90').should('exist');
      cy.findByRole('button', { name: /add to cart/i }).should('exist');
    })

    // galley
    cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0);

  });
});
