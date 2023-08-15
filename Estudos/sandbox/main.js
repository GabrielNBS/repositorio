const embaralhador = function (palavra) {
    if (typeof palavra === "string") {
        let array = palavra.split(""); // Converte a string em um array de caracteres
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos nas posições i e j
        }
        return array.join(""); // Converte o array de caracteres de volta para uma string
    }
    return "A entrada precisa ser uma palavra";
}

console.log(embaralhador("deus"));

const printNumber = () => {
    const number = 10
    const strings = []

    for (let i = 0; i < number ; i++) {
        strings.push(i + 1)
    }
}


const tabuada = (num) => {
    if(typeof num === "number") {
        const tabuada = []
        const numberTabuada = 10
        for (let i = 0; i < numberTabuada; i++){
            const resultado = num * (i + 1)
            tabuada.push(`O resuntado de ${num} * ${i + 1} é igual a : ${resultado}`)
        }
        return tabuada
    }
}

tabuada(5)

const getPares = (num) => {
    if (num % 2 === 0) {
        let numerosPares = [];
        for (let i = 2; i <= num; i += 2) {
            numerosPares.push(i);
        }
        return numerosPares.reduce((previusNumber, currentNumber) => {
            return previusNumber + currentNumber;
        }, 0);
    }
    alert("adicione um numero par")
}

console.log(getPares(100)); // Resultado: 2550


