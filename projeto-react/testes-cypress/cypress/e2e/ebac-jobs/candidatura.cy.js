/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Gabriel do Nascimento')
        cy.get('input[name="email"]').type('gabrielganbajf@gmail.com')
        cy.get('input[name="telefone"]').type('32984286600')
        cy.get('input[name="endereco"]').type('Avenida Brasil')
        cy.get('select[name="escolaridade"]').select("medio-completo")
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (str) => {
            expect(str).contain('Obrigado pela candidatura!')
        })
    })

})