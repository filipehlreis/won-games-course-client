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

  it('should sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.signIn('strapi@gmail.com', '123456')
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.signOut('strapi123')

    cy.visit('/sign-in')
    cy.signIn()
    cy.signOut()

  })

  it.only('should sign the user and redirect to the page that it was defined previously', () => {
    cy.visit('/profile/me')

    //redirecionado para o sign-in com a callback do profile/me
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`)

    //fazer o sign in
    cy.signIn()

    cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/me`)

    cy.findByLabelText(/username/i).should('have.value', 'e2euser')
    cy.findByLabelText(/e-mail/i).should('have.value', 'e2e@wongames.com.br')

  })
})
