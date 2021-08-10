/// <reference types="cypress" />


describe('Funcionalidade da paginas de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    })

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
            .first()
            .click()
    });

    it('Deve adiconar produto ao carrinho', () => {
        var quant = 2

        cy.get('[class="product-block grid"]')
            .constains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', quant + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });

    it('Deve adicinar produto ao carrinho com comendo customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 2)

    })
});