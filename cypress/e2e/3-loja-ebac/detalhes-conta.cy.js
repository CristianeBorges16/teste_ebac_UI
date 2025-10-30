/// <reference types="cypress"/>

describe('Funcionalidade - Detalhes da Conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('LoginPerfil').then(login =>{
            cy.Ctxlogin(login.usuario, login.senha)
        })
    });
    it('01-Deve alterar nome, sobrenome e display com sucesso-usando comando customizado', () => {
        cy.detalhesConta('Cris','Teste','Cris Teste')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});