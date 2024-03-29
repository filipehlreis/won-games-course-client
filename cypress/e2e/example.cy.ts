/// <reference path="../support/index.d.ts" />

describe.skip('Cypress TS', () => {
  it('should go to Google', () => {
    cy.google();
  });

  it('should change light/dark theme on willian justen site', () => {
    cy.visit('https://willianjusten.com.br');

    cy.findByTitle(/mudar o tema/i).click();
    cy.get('.light').should('exist');

    cy.findByTitle(/mudar o tema/i).click();
    cy.get('.dark').should('exist');
  })

  it('should visit won games', () => {
    cy.visit('https://wongames.willianjusten.com.br');

    cy.findByText(/um site de estudos!/i).should('exist');
  })
});
