
describe('Home Page', () => {
  it('should render home sections ', () => {
    cy.viewport(1000, 1000);

    cy.visit('/');

    // cy.shouldRenderBanner();
    cy.shouldRenderShowcase({ name: "New Games", highlight: false })
    cy.shouldRenderShowcase({ name: "Most Popular Games", highlight: true })
    cy.shouldRenderShowcase({ name: "Upcoming Games", highlight: true })
    cy.shouldRenderShowcase({ name: "Free Games", highlight: true })
  });
})

