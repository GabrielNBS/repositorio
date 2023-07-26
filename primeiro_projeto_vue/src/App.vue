<script setup>
import { reactive } from 'vue';

const nome = "gabriel do nascimento";

const imgTeste = "https://th.bing.com/th/id/OIP.dl0Uw7puPPxLflyvu00-swHaLa?w=192&h=296&c=7&r=0&o=5&pid=1.7"
const imgGoku = "https://th.bing.com/th/id/OIP.ukaSlwWRf3tswyU9Rgq8IQHaJQ?w=192&h=240&c=7&r=0&o=5&pid=1.7"
const gostaDaImagem = true;
const gostaDoGoku = false;

const estado = reactive({
  contador: 0,
  email: "",
  saldo: 5000,
  transferindo: 0,
  lista: ["gabriel", "ana laura", "sandra", "davi"],
  listaVazia: '',
})

function encrementar() {
  estado.contador++
}

function decrementar() {
  estado.contador--
}

const alteraEmail = evento => estado.email = evento.target.value;

const saldoPosteriorTransferencia = evento => estado.transferindo = evento.target.value;

const validaValorDeTransferencia = () => estado.transferindo > estado.saldo;

const armazenaNome = evento => estado.listaVazia = evento.target.value;

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function cadastraNome() {
  if(estado.listaVazia.length >= 3) {
    estado.lista.push(estado.listaVazia)
  } else {
    alert("Digite mais Caracteres")
  }
}

</script>

<template>
  <h1>{{ nome }}</h1>
  <img v-if="gostaDaImagem" :src="imgTeste" alt="Vegeta">
  <img v-else-if="gostaDoGoku" :src="imgGoku" alt="Vegeta">
  <h2 v-else>Gosta é de nada desgrama</h2>

  <br />
  <hr />

  {{ estado.contador }}
  <button @click="encrementar"  type="button">+</button>
  <button @click="decrementar"  type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br />
  <hr />

  saldo:  {{ estado.saldo }} <br />
  transferindo: {{ estado.transferindo }} <br />
  saldo depois da transferencia: {{ mostraSaldoFuturo() }} <br />
  <input :class="{ invalido: validaValorDeTransferencia() }" @keyup="saldoPosteriorTransferencia" type="number" placeholder="Quantia para trasnferir">
  <button v-if="!validaValorDeTransferencia()">Transferir</button>
  <span v-else>valor maior que o saldo</span>

  <br />
  <hr />

  <ul>
    <li v-for="nomes in estado.lista">
      {{ nomes }}
    </li>
  </ul>
  <input @keyup="armazenaNome" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">cadastrar nome</button>
</template>

<style scoped>

.invalido {
  outline-color: red;
  border-color: red;
}
</style>
