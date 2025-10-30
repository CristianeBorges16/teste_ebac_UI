/// <reference types="cypress"/>

const LogPerfil = require ('../../fixtures/LoginPerfil.json')  // seleciona o arq com massa de dados

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('04-Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get ('#username').type(LogPerfil.usuario)
        cy.get('#password').type(LogPerfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, cris.teste (não é cris.teste? Sair)')
    });

    it('05-Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('LoginPerfil').then ( dados => {
            cy.get ('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false})  // log: false para não mostrar a senha
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, cris.teste (não é cris.teste? Sair)')
        })
    });

    it.only('06-Deve fazer login com sucesso - usando Comandos Customizados', () => {
        cy.Ctxlogin('cris.teste@teste.com.br', 'ebac-teste1!!!')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, cris.teste (não é cris.teste? Sair)')
    });
});