let countMaisDeTresDigitos = 0;
let numero = null;

while (true) {
    numero = parseInt(prompt("Digite um número (0 para sair):"), 10);

    if (numero === 0) {
        break;
    }

    if (Math.abs(numero) >= 1000) {
        countMaisDeTresDigitos++;
    }
}

console.log("Quantidade de números com mais de três dígitos: " + countMaisDeTresDigitos);
