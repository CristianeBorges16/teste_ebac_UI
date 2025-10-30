/// < reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get ('#username').type('cris.teste@teste.com.br')
        cy.get('#password').type('ebac-teste1!!!')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, cris.teste (não é cris.teste? Sair)')
    });
});