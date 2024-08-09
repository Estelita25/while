let countDivisiveisPor2 = 0;
let countDivisiveisPor3 = 0;
let countDivisiveisPor5 = 0;

let numero = null;

while (true) {
    numero = parseInt(prompt("Digite um número (0 para sair):"), 10);

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        countDivisiveisPor2++;
    }
    if (numero % 3 === 0) {
        countDivisiveisPor3++;
    }
    if (numero % 5 === 0) {
        countDivisiveisPor5++;
    }
}

console.log("Quantidade de números divisíveis por 2: " + countDivisiveisPor2);
console.log("Quantidade de números divisíveis por 3: " + countDivisiveisPor3);
console.log("Quantidade de números divisíveis por 5: " + countDivisiveisPor5);
