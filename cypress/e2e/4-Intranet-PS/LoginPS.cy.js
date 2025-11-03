/// <reference types="cypress"/>

describe('Funcionalidade: LoginPS', () => {

    beforeEach(() => {
        cy.visit('http://intranet.papersolutions.com.br/#/')
    });

    it('01-Deve fazer login com sucesso', () => {
        cy.get('#mat-input-0').type('cristiane.borges@papersolutions.com.br')
        cy.get('#mat-input-1').type('DeuseAmor1!!!',{log:false})
        cy.get('.login-button').click()
        cy.get('.ps-pantonista').should('contain','Plantonista')
        cy.get(':nth-child(2) > .ps-card-title > .ps-status').should('contain','Backup 1')
        cy.get(':nth-child(3) > .ps-card-title > .ps-status').should('contain','Backup 2')
    });
});