
describe('Home Page', () => {
  it('should render home sections ', () => {
    cy.viewport(1000, 1000);

    cy.visit('/');

    cy.shouldRenderBanner();
  });
})

