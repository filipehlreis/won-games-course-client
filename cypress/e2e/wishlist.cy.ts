describe('Wishlist', () => {
  before(() => {
    cy.viewport(1000, 1000)
  })

  it('should add and remove games from wishlist', () => {
    // acessar a pagina de wishlist nao logado
    cy.visit('/wishlist')

    // redireciona e faz signIn
    cy.signIn()

    // verifica se a wishlist esta vazia
    cy.findByText(/Your wishlist is empty/i).should('exist')

    // cy.wait(2000)
    // vou pegar um jogo e adicionar na wishlist
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /add to wishlist/i }).click()
    })

    // verificar se o jogo esta la
    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    // remover esse jogo
    cy.getByDataCy('wishlist').within(() => {
      cy.findByRole('button', { name: /remove from wishlist/i }).click()
    })

    // verificar se esta vazio
    cy.findByText(/Your wishlist is empty/i).should('exist')


  })
})

