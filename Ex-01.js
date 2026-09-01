// Solicita os dados do aluno
let nomeAluno = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

// Média mínima para aprovação
const mediaMinima = 7;

// Calculando a média
let media = (nota1 + nota2) / 2;

// Variável para armazenar a nota de recuperação
let notaRecuperacao;

// Variável para armazenar a situação do aluno
let situacao;

// Verificando a situação do aluno
if (media >= mediaMinima) {
    situacao = "APROVADO";
} else if (media >= 5) {
    notaRecuperacao = Number(prompt("Digite a nota da recuperação:"));

    if (notaRecuperacao < 5) {
        situacao = "REPROVADO";
    } else {
        situacao = "APROVADO";
    }
} else {
    situacao = "REPROVADO";
}

// Exibindo os resultados no console
console.log("Nome do aluno:", nomeAluno);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Média:", media);

if (notaRecuperacao !== undefined) {
    console.log("Nota de Recuperação:", notaRecuperacao);
}

console.log("Situação do Aluno:", situacao);

// Criando a mensagem do resultado
let mensagem = `
Nome do aluno: ${nomeAluno}
Nota 1: ${nota1}
Nota 2: ${nota2}
Média: ${media}
`;

if (notaRecuperacao !== undefined) {
    mensagem += `Nota de Recuperação: ${notaRecuperacao}\n`;
}

mensagem += `Situação do Aluno: ${situacao}`;

// Mostrando o resultado em um alerta
alert(mensagem);

// Mostrando o resultado na página
document.body.innerHTML = `
    <h1>Resultado do Aluno</h1>
    <p><strong>Nome do aluno:</strong> ${nomeAluno}</p>
    <p><strong>Nota 1:</strong> ${nota1}</p>
    <p><strong>Nota 2:</strong> ${nota2}</p>
    <p><strong>Média:</strong> ${media}</p>
    ${
        notaRecuperacao !== undefined
        ? `<p><strong>Nota de Recuperação:</strong> ${notaRecuperacao}</p>`
        : ""
    }
    <p><strong>Situação do Aluno:</strong> ${situacao}</p>
`;