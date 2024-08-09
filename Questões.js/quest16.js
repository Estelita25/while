let i = 0;
let aprovados = 0;

while (i < 5) {
    let nota = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + ":"));

    if (nota >= 7) {
        aprovados++;
    }

    i++;
}

console.log("Alunos aprovados: " + aprovados);
