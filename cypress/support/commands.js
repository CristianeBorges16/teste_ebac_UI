// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('Ctxlogin', (usuario, senha) => { 
        cy.get ('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
  })


  Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click() // Executa o Cadastro
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()  //Detalhes da Conta
        cy.get('#account_first_name').type(nome)
        cy.get('.form-row-last > label').type(sobrenome)
        cy.get('.woocommerce-Button').click()
  })

  Cypress.Commands.add('detalhesConta', (nome, sobrenome, nomecompleto) =>{
        cy.get('#account_first_name').type(nome)  // sem usar o clear ele remonta os nomes
        cy.get('#account_last_name').clear().type(sobrenome)
        cy.get('#account_display_name').clear().type(nomecompleto)
        cy.get('.woocommerce-Button').click()
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })