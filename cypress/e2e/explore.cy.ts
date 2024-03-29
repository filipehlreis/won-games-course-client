/* eslint-disable cypress/no-unnecessary-waiting */
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

  it.skip('should order by price', () => {
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
      cy.shouldBeGreaterThan(0)
    })

  })

  it('should filter by price', () => {
    cy.visit('/games');

    cy.findByText(/highest to lowest/i).click()

    cy.findByText(/free/i).click()
    cy.location('href').should('contain', 'price=0')
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText(/free/i).should('exist');
    })

    cy.findByText(/under \$50/i).click()
    cy.location('href').should('contain', 'price=50')
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(50);
    })

    cy.findByText(/under \$100/i).click()
    cy.location('href').should('contain', 'price=100')
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(100);
    })

    cy.findByText(/under \$150/i).click()
    cy.location('href').should('contain', 'price=150')
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(150);
    })

    cy.findByText(/under \$250/i).click()
    cy.location('href').should('contain', 'price=250')
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(250);
    })

    cy.findByText(/under \$600/i).click()
    cy.location('href').should('contain', 'price=600')
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(600);
    })
  })

  it('should filter by platform and genre', () => {
    cy.visit('/games');

    cy.findByText(/windows/i).click()
    cy.wait(500)
    cy.location('href').should('contain', 'platforms=windows')

    cy.findByText(/linux/i).click()
    cy.wait(500)
    cy.location('href').should('contain', 'platforms=linux')

    cy.findByText(/mac os/i).click()
    cy.wait(500)
    cy.location('href').should('contain', 'platforms=mac')

    cy.findByText(/action/i).click()
    cy.wait(500)
    cy.location('href').should('contain', 'categories=action')

  })

  it('should return empty when no games match', () => {
    cy.visit('/games');


    cy.findByText(/free/i).click()
    cy.wait(500)
    cy.location('href').should('contain', 'price=0')

    cy.findByText(/linux/i).click()
    cy.wait(500)
    cy.location('href').should('contain', 'platforms=linux')

    cy.findByText(/horror/i).click()
    cy.wait(500)
    cy.location('href').should('contain', 'categories=horror')

    cy.getByDataCy('game-card').should('not.exist')
    cy.findByText(/We didn't find any games with this filter/i).should('exist')

  })
})
