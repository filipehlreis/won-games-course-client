
describe('Home Page', () => {
  it('should render home sections ', () => {
    //
    cy.viewport(1000, 1000);
    cy.visit('/');

    // selecionou os banners
    cy.get('.slick-slider').first().within(() => {
      cy.findByRole('heading', { name: /cyberpunk 2077/i });
      cy.findByRole('link', { name: /buy now/i });

      cy.get('.slick-dots :nth-child(2) > button').click();
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(500);

      cy.findByRole('heading', { name: /Two Point Hospital: Bigfoot/i });
      cy.findByRole('link', { name: /buy now/i });
      cy.get('.slick-dots :nth-child(3) > button').click();
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(500);

      cy.findByRole('heading', { name: /Prey: Digital Deluxe Edition/i });
      cy.findByRole('link', { name: /buy now/i });

    })
  });
})

