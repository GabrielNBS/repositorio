class Pessoa {
    nome: string;
    
    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): string {
        return `${this.nome} diz oi`
    }
}

class ContaBancaria {
    private saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class contaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void { 
    }
}