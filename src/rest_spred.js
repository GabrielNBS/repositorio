const somar = function(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual
        return total
    }, 0)
    return soma;
}

console.log(somar(10, 325));


const xbox = {
    ano: 2019,
    dono: "gabriel",
    sucessor: "mayumi",
    fabricante: "microsoft"
}

const ps5 = {
    ...xbox,
    fabricante: "sony"
}

const { fabricante: fabricanteps5 } = ps5;

console.log(fabricanteps5)