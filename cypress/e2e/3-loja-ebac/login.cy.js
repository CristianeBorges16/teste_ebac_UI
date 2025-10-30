/// < reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('01-Deve fazer login com sucesso', () => {
        cy.get ('#username').type('cris.teste@teste.com.br')
        cy.get('#password').type('ebac-teste1!!!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, cris.teste (não é cris.teste? Sair)')
    });

    it('02-Deve inserir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get ('#username').type('invalido@teste.com.br')
        cy.get('#password').type('ebac-teste1!!!')
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
        cy.get('.woocommerce-error').should('exist')  // apenas verifica se este campo passa a existir quando ocorre erro de user
    });

        it('03-Deve inserir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get ('#username').type('cris.teste@teste.com.br')
        cy.get('#password').type('teste1!!!')
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida')
        cy.get('.woocommerce-error').should('exist')  // apenas verifica se este campo passa a existir quando ocorre erro de user
    });
});