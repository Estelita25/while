let countPares = 0;

let numero = null;

while (true) {
    numero = parseInt(prompt("Digite um número (0 para sair):"), 10);

    if (numero === 0) {
        break;
    }
    if (numero % 2 !== 0) {
        break;
    }

    countPares++;
}

console.log("Números pares digitados antes do primeiro ímpar: " + countPares);

