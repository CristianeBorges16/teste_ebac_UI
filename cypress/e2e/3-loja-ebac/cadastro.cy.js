/// < reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')      
        });
    
    it('01-Deve executar cadastro com nomes aleatórios - faker', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('fake123')
        cy.get(':nth-child(4) > .button').click() // Executa o Cadastro
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist') // valida o cadastro

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()  //Detalhes da Conta
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('.form-row-last > label').type(faker.person.lastName())
        // cy.wait(5000)   // 5sec = 5000 mili seconds
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });

    it('02-Deve executar cadastro com nomes aleatórios - usando variáveis faker', () => {
        var email = faker.internet.email()
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('fake123')
        cy.get(':nth-child(4) > .button').click() // Executa o Cadastro
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist') // valida o cadastro

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()  //Detalhes da Conta
        cy.get('#account_first_name').type(nome)
        cy.get('.form-row-last > label').type(sobrenome)
        // cy.wait(5000)   // 5sec = 5000 mili seconds
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });

    it.only('03-Deve executar cadastro com nomes x emails aleatórios mais corretos  - usando variáveis faker', () => {
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var email = faker.internet.email(nome,sobrenome)  // email será montado com o nome e sobrenome sugeridos acima

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('fake123')
        cy.get(':nth-child(4) > .button').click() // Executa o Cadastro
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist') // valida o cadastro

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()  //Detalhes da Conta
        cy.get('#account_first_name').type(nome)
        cy.get('.form-row-last > label').type(sobrenome)
        // cy.wait(5000)   // 5sec = 5000 mili seconds
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });
});