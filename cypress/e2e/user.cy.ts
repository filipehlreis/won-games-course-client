import { createUser } from "../support/generate";

describe('User', () => {
  beforeEach(() => {
    cy.viewport(1000, 1000);
  })

  it.skip('should sign up', () => {
    const user = createUser()

    cy.visit('/sign-up')

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it('should sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.signIn('strapi@gmail.com', '123456')
    cy.signOut('strapi123')

    cy.visit('/sign-in')
    cy.signIn()
    cy.signOut()

  })
})
