type aluno = {
    nome: string,
    cursos?: string[],
    idade: number
}

const alunos = [
    {
        nome: "carlos",
        cursos: ["front=end", "UI/UX"],
        idade: 24
    },
    {
        nome: "ana",
        cursos: ["front=end", "Python"],
        idade: 32
    }
]

alunos.push({
    nome: "taina",
    cursos: ["back=end", "c++"],
    idade: 35
})

const novoAluno: aluno = {
    nome: "joao",
    idade: 19
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}

