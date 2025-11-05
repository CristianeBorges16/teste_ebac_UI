/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

// usado antes do PageObjects   const { it } = require("mocha");

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        // utilizado antes do PageObjects  cy.visit ('produtos')
        produtosPage.visitarURL()
        
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
        .eq(6)  //  Posicionamento inicia na pos = 0
        .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });

    it('04-Seleciona produto por nome', () => {
        cy.get('.product-block')
            .contains('Aether Gym Pant')
            .click()
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    }); 
    
    it('05 - seleciona produto por nome - usando Page Objects', () => {
        produtosPage.buscarProdutoLista('Atlas Fitness Tank')
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });

    it('06 - Busca produto no search - usando Page Objects', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'

        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain',produto) 

    });

    it('07 - Deve visitar a página do produto', () => {

        let produto = 'Ariel Roll Sleeve Sweatshirt'

        //produtosPage.visitarProduto('Ariel-Roll-Sleeve-Sweatshirt') // usando a InterpolaçãoAriel e colocando "-" nos espaços em branco
        //produtosPage.visitarProduto('Ariel Roll Sleeve Sweatshirt') // usando a Interpolação sem adicionar "-"
        produtosPage.visitarProduto(produto)
        cy.get('.product_title').should('contain',produto) 
    });

    it('08 - Deve adicionar produto ao carrinho', () => {
        let produto = 'Grayson Crewneck Sweatshirt'
        let qtd = 6

        produtosPage.visitarProduto(produto)
        // produtosPage.addProdutoCarrinho() - 1a. maneira com info fixas na PageObjects
        // cy.get('.woocommerce-message').should('contain','no seu carrinho')  // sem usar a mensagem completa
        // cy.get('.woocommerce-message').should('contain',qtd + ' × “Grayson Crewneck Sweatshirt” foram adicionados no seu carrinho.') // mensagem completa
        
        produtosPage.addProdutoCarrinho('XS','Red',qtd)  // 2a. Maneira: fornecendo Tamanho,Cor e Qtd
        cy.get('.woocommerce-message').should('contain',qtd + ' × “' + produto +'” foram adicionados no seu carrinho.') // mensagem completa
        
    });

    it.only('09 - Deve adicionar produto ao carrinho usando Massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.visitarProduto(dados[2].nomeProduto)
                
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)
            
                cy.get('.woocommerce-message').should('contain'
                    ,dados[2].quantidade + ' × “' + dados[2].nomeProduto +'” foram adicionados no seu carrinho.') // mensagem completa
        })
    });
});




