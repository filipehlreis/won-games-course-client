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

    sortFields.map(({ label }) => {
      cy.findByText(label).should('exist');
    })
    priceFields.map(({ label }) => {
      cy.findByText(label).should('exist');
    })
    platformFields.map(({ label }) => {
      cy.findByText(label).should('exist');
    })
    genreFields.map(({ label }) => {
      cy.findByText(label).should('exist');
    })
  })
})
