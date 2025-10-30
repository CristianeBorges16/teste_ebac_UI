/// < reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit ('produtos')
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

    it('04-Seleciona produto por nome', () => {
        cy.get('.block-inner')
        cy.get('.product-block')
            .contains('Aether Gym Pant')
            .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });    
});




