
describe('Home Page', () => {
  it('should render home sections ', () => {
    //
    cy.visit('/');
    cy.get('.slick-slider').first().within(() => {
      cy.findByRole('heading', { name: /cyberpunk 2077/i });
      cy.findByRole('link', { name: /buy now/i });
    })
  });
})

