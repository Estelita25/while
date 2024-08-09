let somaEntre50e100 = 0;
let contagemEntre50e100 = 0;

let numero = null;

while (true) {

    numero = parseInt(prompt("Digite um número (0 para sair):"), 10);

    if (numero === 0) {
        break;
    }

    if (numero >= 50 && numero <= 100) {
        somaEntre50e100 += numero;
        contagemEntre50e100++;
    }
}

let mediaEntre50e100 = 0;
if (contagemEntre50e100 > 0) {
    mediaEntre50e100 = somaEntre50e100 / contagemEntre50e100;
}

console.log("Média dos números entre 50 e 100: " + mediaEntre50e100.toFixed(2));
