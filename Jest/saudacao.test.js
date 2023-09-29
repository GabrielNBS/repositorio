const saudacao = require('./saudacao')

describe("testes para saudação", () => {
    test('Devera retornar Olá, mundo!', () => {
        const saudar = saudacao.dizOla('mundo')

        expect(saudar).toBe('Olá, mundo!')
    })
})