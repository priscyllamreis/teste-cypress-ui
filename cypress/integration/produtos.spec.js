/// <reference types="cypress" />

describe('Funcionalidade da paginas de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
            .first()
            .click()
    });

    it.only('Deve adiconar produto ao carrinho', () => {
        var quant = 2


        cy.get('[class="product-block grid"]')
            .first()
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', quant + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')



    });
});