
describe('Reset Password', () => {
  it.skip('should show error if password does not match', () => {
    cy.visit('/reset-password?code=123456734')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('1234567')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/confirm password does not match with password/i).should('exist')
  })

  it('should show errror if code is not valid', () => {
    cy.intercept('POST', '**/api/auth/reset-password', res => {
      res.reply({
        statusCode: 400,
        body: {
          error: {
            message: 'Incorrect code provided'
          },
        }
      })
    })

    cy.visit('/reset-password?code=wrong_code')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/Incorrect code provided/i).should('exist')



  })
})
