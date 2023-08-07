/// <reference types="cypress" />

context('Funcionalidade login' , () =>{

    it('Deve fazer login com sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'olá, aluno_ebac (nao é aluno ebac?')
    })

    it('deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'e-mail ebac@teste.com está incorreta')
    })
    
    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
            cy.get('#username').type('aluno_ebac@teste.com')
            cy.get('#password').type('teste@test.com')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')  })
})
