/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um contato', () => {
        cy.get('[type="text"]').type('Gabriel')
        cy.get('[type="email"]').type('gabriel.test@frontend.com')
        cy.get('[type="tel"]').type('00000000000')
        cy.get('.adicionar').click()

        expect(cy.get('h2').contains('4'))
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()

        expect(cy.get('h2').contains('3'))
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Gabrielly')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('gabriel.test@frontend.com')
        cy.get('.alterar').click()

        expect(cy.get('.sc-iAEyYk').contains('Gabrielly'))
    })
})