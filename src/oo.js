"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `${this.nome} diz oi`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class contaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
    }
}
