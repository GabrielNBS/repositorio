const nomes = ["gabriel"];

const alunos = nomes.map(itemAtual => itemAtual = {
    nome: itemAtual,
    nota: 6
})

alunos.push({
    nome: "gabrielly",
    nota: 10
})

alunos.push({
    nome: "mayumi",
    nota: 3
})

const aprovados = item => item.nota >= 6;

const alunoAprovados = alunos.filter(aprovados);


console.log(alunoAprovados)
