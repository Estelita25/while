let menorImparPositivo = null;

let numero = null;

while (true) {
    numero = parseInt(prompt("Digite um número (0 para sair):"), 10);

    if (numero === 0) {
        break;
    }

    if (numero > 0 && numero % 2 !== 0) {
        if (menorImparPositivo === null || numero < menorImparPositivo) {
            menorImparPositivo = numero;
        }
    }
}

if (menorImparPositivo !== null) {
    console.log("O menor valor positivo e ímpar digitado é: " + menorImparPositivo);
} else {
    console.log("Nenhum valor positivo e ímpar foi digitado.");
}
