
describe('Cart', () => {
  before(() => {
    cy.viewport(1000, 1000)
  })

  it('should add and remove items from cart', () => {
    //visitar a home
    cy.visit('/')

    // procurar um jogo e clicar no botao de carrinho
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    // procurar outro jogo e clicar no botao de carrinho
    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    // procurar outro jogo e clicar no botao de carrinho
    cy.getByDataCy('game-card').eq(2).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    // verifica se o icone od carrinho tem o numero de jogos
    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', '3')
      .click()

    // abre o carrinho e verifica se tem os jogos la
    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    // fecha o carrinho
    cy.findAllByLabelText(/cart items/i)
      .first()
      .click()

    // procura pelo jogo adicionado e remove
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    // procura pelo jogo adicionado e remove
    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    // procurar outro jogo e clicar no botao de carrinho
    cy.getByDataCy('game-card').eq(2).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    // verifica se o icone do carrinho nao tem nada
    cy.findAllByLabelText(/cart items/i).should('not.exist')


    // abre o carrinho e verifica se ta vazio
    cy.findAllByLabelText(/shopping cart/i).first().click()
    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading', { name: /your cart is empty/i }).should('exist')
    })

  })
})
