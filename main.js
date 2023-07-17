function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    
    this.dizNome = function() {
        console.log("meu nome é " + this.nome);
    }
}

function Funcionario(nome, idade, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function () {
        return _salario;
    }

    this.setSalario = function (valor) {
        if (typeof valor === "number") {
            _salario = valor;
        }
    }

    this.aumento = function () {
        const novoSalario = _salario *1.1;
        salario = novoSalario;
    }
    
    Pessoa.call(this, nome, idade)
}


function DesenvolvedorFrontend(nome,idade, skills) {
    this.skills = skills

    Funcionario.call(this, nome, idade, "Dev Front-end", 3200)

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.10;
        this.setSalario(novoSalario)
    }
}

function DesenvolvedorBackend(nome, idade, skills) {
    this.skills = skills;

    Funcionario.call(this, nome, idade, "Dev Back-end", 4000)

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario)
    }
}

function Gerente(nome, idade, equipe) {
    this.equipe = equipe;

    Funcionario.call(this, nome, idade, "Gerente", 10000)

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.20;
        this.setSalario(novoSalario)
    }
}


const gabrielly = new DesenvolvedorBackend("gabrielly", 22, ["C++, SQL, node.js"])
const gabriel = new DesenvolvedorFrontend("gabriel", 23, ["js", "html", "css"]);
const ariane = new Gerente("ariane", 35, 23);


gabriel.aumento();
gabrielly.aumento();
ariane.aumento();


console.log(gabriel);
console.log(gabrielly);
console.log(ariane);
console.log(gabriel.getSalario().toFixed(2));
console.log(gabrielly.getSalario().toFixed(2));
console.log(ariane.getSalario().toFixed(2));