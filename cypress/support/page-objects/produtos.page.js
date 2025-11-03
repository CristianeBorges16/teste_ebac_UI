class produtosPage {

    visitarURL() {
      cy.visit('produtos')  
    }
    
    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block')
            .contains(nomeProduto)
            .click()
    }

    visitarProduto(nomeProduto) {
    //    cy.visit(`produtos/${nomeProduto}`)  // A crase é chamada de interpolação.
    //                                        // Neste caso, nomeProduto teria que ter "-" nos espaços vazios.
        const urlFormatada = nomeProduto.replace(/ /g,'-') // entre as / / tem o texto que será substituido (no caso, espaço)
                                                            // g = global (substitui todos) por '-'
         cy.visit(`produtos/${urlFormatada}`)
    }
    addProdutoCarrinho(tamanho, cor, quantidade) {
    /*  Primeira maneira de se fazer, mais fixo
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.input-text').clear().type('2')
    */
    
    //    Segunda maneira, mais flexível:
        cy.get('.button-variable-item-' + tamanho).click()  // usando concatenação
        cy.get(`.button-variable-item-${cor}`).click()      // ou, usando interpolação
        cy.get('.input-text').clear().type(quantidade)

        cy.get('.single_add_to_cart_button').click()
    }

}

export default new produtosPage()