/// < reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('01-Seleciona o primeiro produto', () => {
        cy.get('.product-block > ')
            .first()
            .click()
        cy.get('.product_title').should('contain' , 'Abominable Hoodie')
    });

    it('02-Seleciona o último produto', () => {
        cy.get('.block-inner')
        .last()
        .click()
        cy.get('.product_title').should('contain' , 'Atlas Fitness Tank')
    });

    it('03-Seleciona produto por posição - 7', () => {
        cy.get('.block-inner')
        .eq(6)
        .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });
});




