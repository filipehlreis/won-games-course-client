import { genreFields, platformFields, priceFields, sortFields } from '../../src/utils/filter/fields';



describe('Explore Page', () => {
  before(() => {
    cy.viewport(1000, 1000);

  })

  it.skip('should render filters columns', () => {
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

  it.skip('should show 15 games and show more games when show more is clicked', () => {
    cy.visit('/games');

    cy.getByDataCy('game-card').should('have.length', 15);
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('game-card').should('have.length', 30);
  })

  it('should order by price', () => {
    cy.visit('/games');

    cy.findByText(/Lowest to highest/i).click()
    // // eslint-disable-next-line cypress/no-unnecessary-waiting
    // cy.wait(1000)

    cy.location('href').should('contain', 'sort=price%3Aasc')
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText('Free').should('exist')
    })


    cy.findByText(/highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.getByDataCy('game-card').first().within(() => {
      cy
        .findByText(/^\$\d+(\.\d{1,2})?/)
        .invoke('text')
        .then($el => $el.replace('$', ''))
        .then(parseFloat)
        .should('be.gt', 0)
    })

  })
})
