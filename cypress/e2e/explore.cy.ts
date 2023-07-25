import { genreFields, platformFields, priceFields, sortFields } from '../../src/utils/filter/fields';



describe('Explore Page', () => {
  before(() => {
    cy.viewport(1000, 1000);

  })

  it('should render filters columns', () => {
    cy.visit('/games');

    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')


    cy.getFields(sortFields);
    cy.getFields(priceFields);
    cy.getFields(platformFields);
    cy.getFields(genreFields);

  })

  it('should show 15 games and show more games when show more is clicked', () => {
    cy.visit('/games');

    cy.getByDataCy('game-card').should('have.length', 15);
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('game-card').should('have.length', 30);
  })
})
