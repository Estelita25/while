let numero = parseInt(prompt("Digite um número inteiro:"), 10);

let somaCubos = 0;

let numTemp = Math.abs(numero); 

while (numTemp > 0) {
    let digito = numTemp % 10;
    
    somaCubos += Math.pow(digito, 3);
    
    numTemp = Math.floor(numTemp / 10);
}


console.log("A soma dos dígitos elevados ao cubo é:", somaCubos);
