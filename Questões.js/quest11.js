let numero;

let maior = -Infinity; 
let menor = Infinity;  

while (true) {
    numero = parseInt(prompt("Digite um número (ou 0 para parar):"), 10);

    if (numero === 0) {
        break;
    }

    if (numero > maior) {
        maior = numero;
    }

    if (numero < menor) {
        menor = numero;
    }
}

console.log("Maior valor digitado:", maior);
console.log("Menor valor digitado:", menor);

