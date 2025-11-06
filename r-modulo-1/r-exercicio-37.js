/*
    Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
    o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
    respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
    aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
    e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

let NUM_QUESTOES = 20;
let NUM_ALUNOS = 50;
let NOTA_DE_CORTE = 12;
let OPCOES = ['A', 'B', 'C', 'D'];

let gabarito = [];

function getOpcaoAleatoria() {
    let indiceAleatorio = Math.floor(Math.random() * OPCOES.length);
    return OPCOES[indiceAleatorio];
}

for (let i = 0; i < NUM_QUESTOES; i++) {
    gabarito.push(getOpcaoAleatoria());
}

console.log("Sistema de Correção de Provas");
console.log(`Gabarito Oficial: [ ${gabarito.join(', ')} ]`);
console.log(`Nota de Corte: ${NOTA_DE_CORTE} acertos`);
console.log("\nProcessando Alunos");


for (let i = 1; i <= NUM_ALUNOS; i++) {
    
    let numeroAluno = i;
    let respostas = [];
    let acertos = 0;

    for (let j = 0; j < NUM_QUESTOES; j++) {
        respostas.push(getOpcaoAleatoria());
    }

    for (let k = 0; k < NUM_QUESTOES; k++) {
        if (respostas[k] === gabarito[k]) {
            acertos++;
        }
    }

    let status = "";
    if (acertos >= NOTA_DE_CORTE) {
        status = "✅ APROVADO";
    } else {
        status = "❌ REPROVADO";
    }

    let alunoFormatado = String(numeroAluno).padStart(2, '0');
    let acertosFormatado = String(acertos).padStart(2, ' ');
    
    console.log(`Aluno N° ${alunoFormatado}: ${acertosFormatado} acertos -> ${status}`);
}

console.log("\nCorreção Concluída");