'use strict';

const form = document.getElementById('form-contato');
const nomeCadastrado = "este contato ja foi cadastrado";
let listaContatos = [];
let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContagem();
})

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNúmeroTell = document.getElementById('contato-cell')

    if (listaContatos.includes(inputNomeContato.value)) {
        alert(nomeCadastrado);
    } else {
    listaContatos.push(inputNomeContato.value);

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNúmeroTell.value}</td>`
    linha += '</tr>'

    linhas += linha;
    }
    inputNomeContato.value = '';
    inputNúmeroTell.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContagem () {
    const contador = document.getElementById('contador-contatos');
    const numeroContatos = listaContatos.length;
    contador.innerText = `${numeroContatos} contato${numeroContatos === 1 ? '' : 's'}`
}