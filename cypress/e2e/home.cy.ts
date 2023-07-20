
describe('Home Page', () => {
  it('should render home sections ', () => {
    cy.viewport(1000, 1000);

    cy.visit('/');

    // cy.shouldRenderBanner();
    cy.shouldRenderShowcase({ name: "New Games" })
    cy.shouldRenderShowcase({ name: "Most Popular Games" })
    cy.shouldRenderShowcase({ name: "Upcoming Games" })
    cy.shouldRenderShowcase({ name: "Free Games" })
  });
})

