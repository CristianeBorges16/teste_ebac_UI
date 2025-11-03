/// <reference types="cypress"/>

describe('Funcionalidade: LoginPS', () => {

    beforeEach(() => {
        // cy.visit('http://intranet.papersolutions.com.br/#/users')
        cy.visit('http://intranet.papersolutions.com.br/#')
        cy.get('#mat-input-0').type('cristiane.borges@papersolutions.com.br')
        cy.get('#mat-input-1').type('DeuseAmor1!!!',{log:false})
        cy.get('.login-button').click()
        // cy.visit('http://intranet.papersolutions.com.br/#/users')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('01-Deve fazer um cadastro com sucesso', () => {
        let email = 'Teste2@gmail.com.br'
        cy.get('.hamburger > .mat-mdc-button-touch-target').click()
        cy.get(':nth-child(4) > .ng-star-inserted > .vertical-menu-item > .vertical-menu-item-text').click()
        cy.get('app-users.ng-star-inserted > .mat-toolbar > :nth-child(1) > .mdc-button__label').click()
        cy.get('#mat-input-4').type(email)  // email do usuário
        cy.get('#mat-input-4').clear().type(email)  // email do usuário
        cy.get('#mat-input-5').type('Fake123')  // Senha
        cy.get('#mat-input-6').type('1234567890')  // Telefone
        cy.get('#mat-input-3').type('Teste CTX')  // Nome do Usuário
        cy.get('.mdc-button__label').eq(25).click()
        cy.get('#mat-input-2').type(email)
        cy.get('.mat-mdc-row > .cdk-column-email').should('contain',email)
    });

    it('02-Não deve fazer um cadastro com e-mail repetido', () => {
        let email = 'Teste2@gmail.com.br'
        cy.get('.hamburger > .mat-mdc-button-touch-target').click()
        cy.get(':nth-child(4) > .ng-star-inserted > .vertical-menu-item > .vertical-menu-item-text').click()
        cy.get('app-users.ng-star-inserted > .mat-toolbar > :nth-child(1) > .mdc-button__label').click()
        cy.get('#mat-input-4').type(email)  // email do usuário
        cy.get('#mat-input-4').clear().type(email)  // email do usuário
        cy.get('#mat-input-5').type('Fake123')  // Senha
        cy.get('#mat-input-6').type('1234567890')  // Telefone
        cy.get('#mat-input-3').type('Teste CTX')  // Nome do Usuário
        cy.get('.mdc-button__label').eq(25).click()
        cy.wait(5000)
        cy.get('#mat-mdc-error-16').should('contain','já cadastrado')
    });
});