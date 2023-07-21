"use strict";

var redesSociais = ["facebook", "instagram", "tik-tok"];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("eu utilizado o ".concat(redesSociais[i]));
}
redesSociais.forEach(function (item, index) {
  console.log("".concat(index, " eu utilizo o ").concat(item));
});
var familia = ["gabriel", "gabrielly", "mayumi"];
var familiaAtt = familia.map(function (itemAtual) {
  return {
    nome: itemAtual,
    letras: itemAtual.length
  };
});
var posicaoMayumi = function posicaoMayumi(itemAtual) {
  return itemAtual.nome === "mayumi";
};
var indexDaMayumi = familiaAtt.findIndex(posicaoMayumi);
var indexDaMayumi2 = familiaAtt.findIndex(function (itemAtual) {
  return itemAtual.nome === "mayumi";
});
var nomeComprido = familiaAtt.every(function (item) {
  return item.letras >= 7;
});
var listaDeNomes = familiaAtt.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, ", ");
  return acumulador;
}, "");
console.log(indexDaMayumi);