let somaDivisiveisPor3 = 0;
let contagemDivisiveisPor3 = 0;

let numero = null;

while (true) {
    numero = parseInt(prompt("Digite um número (0 para sair):"), 10);

    if (numero === 0) {
        break;
    }

    if (numero % 3 === 0) {
        somaDivisiveisPor3 += numero;
        contagemDivisiveisPor3++;
    }
}

let mediaDivisiveisPor3 = 0;
if (contagemDivisiveisPor3 > 0) {
    mediaDivisiveisPor3 = somaDivisiveisPor3 / contagemDivisiveisPor3;
}

console.log("Média dos números divisíveis por 3: " + mediaDivisiveisPor3.toFixed(2));
