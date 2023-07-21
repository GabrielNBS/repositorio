
const redesSociais = ["facebook", "instagram", "tik-tok"];


for (let i = 0; i < redesSociais.length; i++) {
    console.log(`eu utilizado o ${redesSociais[i]}`);
}

redesSociais.forEach(function(item, index) {
    console.log(`${index} eu utilizo o ${item}`);
})

const familia = ["gabriel", "gabrielly", "mayumi"];

const familiaAtt = familia.map(function(itemAtual) {
    return {
        nome: itemAtual,
        letras: itemAtual.length
    }
})

let posicaoMayumi = itemAtual => itemAtual.nome === "mayumi";
let indexDaMayumi = familiaAtt.findIndex(posicaoMayumi);

let indexDaMayumi2 = familiaAtt.findIndex(function(itemAtual) {
    return itemAtual.nome === "mayumi"
});



const nomeComprido = familiaAtt.every(function(item) {
    return item.letras >= 7; 
})

const listaDeNomes = familiaAtt.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome}, `
    return acumulador;
},"") 

console.log(indexDaMayumi);