let soma = 0;
let contagem = 0;

let numero;

while (true) {
    numero = parseInt(prompt("Digite número (ou -1 para parar):"), 10);
    if (numero === -1) {
        break;
    }
    soma += numero;
    contagem++;
}

let media = contagem > 0 ? soma / contagem : 0;

console.log("Essa é a média dos números digitados:", media);
