import { createUser } from "../support/generate";

describe('User', () => {
  beforeEach(() => {
    cy.viewport(1000, 1000);
  })

  it('should sign up', () => {
    const user = createUser()

    cy.visit('/sign-up')

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })
})
