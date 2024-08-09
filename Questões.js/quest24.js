let primeiroNumero = null;
let ultimoNumero = null;

let countPares = 0;
let countImpares = 0;

let numero = null;

while (true) {
    numero = parseInt(prompt("Digite um número (0 para sair):"), 10);

    if (numero === 0) {
        break;
    }

    if (primeiroNumero === null) {
        primeiroNumero = numero;
    }

    ultimoNumero = numero;
}

if (primeiroNumero !== null && ultimoNumero !== null) {
    for (let i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 2 === 0) {
            countPares++;
        } else {
            countImpares++;
        }
    }
}

console.log("Quantidade de números pares entre " + primeiroNumero + " e " + ultimoNumero + ": " + countPares);
console.log("Quantidade de números ímpares entre " + primeiroNumero + " e " + ultimoNumero + ": " + countImpares);
