class Pokemon {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(ataque) {
        console.log(`${this.nome} ataca com ${ataque}`);
    }
}

class Garchomp extends Pokemon {
    constructor() {
        super("garchomp", "dragão")
    }
}


const garchompGabriel = new Garchomp();

console.log(garchompGabriel)