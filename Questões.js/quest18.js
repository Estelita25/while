let countPares = 0;
let countImpares = 0;

let numero = null;

while (true) {
    numero = parseInt(prompt("Digite um número (0 para sair):"), 10);

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        countPares++;
    } else {
        countImpares++;
    }
}

console.log("Números pares digitados: " + countPares);
console.log("Números ímpares digitados: " + countImpares);
