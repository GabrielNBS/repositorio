function calculaArea(base: number, altura: number): number {
    return base * altura;
}


const calculaArea2 = (base:number, altura: number): number => base * altura;

function somar (...numeros: number[]): void {
    console.log(numeros)
}


//Void

function teste(): string | number {
    if(5 > 10) {
        return "5 é maior que 10"
    }
    return 5
}