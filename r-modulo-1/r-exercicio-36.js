/*
    Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
    do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
    um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
    número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
    o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
    mensagem "Parabéns, tu foi o GANHADOR".
*/

let NUM_JOGOS = 13;
let NUM_APOSTADORES = 100;

let gabarito = [];

function getPalpite() {
    return Math.floor(Math.random() * 3);
}

for (let i = 0; i < NUM_JOGOS; i++) {
    gabarito.push(getPalpite());
}

console.log(" Loteria Esportiva ");
console.log(`Gabarito Oficial: [ ${gabarito.join(' | ')} ]`);
console.log("\n Verificando Apostas ");

for (let i = 1; i <= NUM_APOSTADORES; i++) {
    
    let numeroApostador = i;
    let respostas = [];
    let acertos = 0;

    for (let j = 0; j < NUM_JOGOS; j++) {
        respostas.push(getPalpite());
    }

    for (let k = 0; k < NUM_JOGOS; k++) {
        if (respostas[k] === gabarito[k]) {
            acertos++;
        }
    }

    let apostadorFormatado = String(numeroApostador).padStart(3, ' ');
    let acertosFormatado = String(acertos).padStart(2, ' ');
    
    console.log(`Apostador N° ${apostadorFormatado}: ${acertosFormatado} acertos.`);

    if (acertos === 13) {
        console.log("**********************************************");
        console.log(`Apostador N° ${apostadorFormatado} é o GANHADOR!`);
        console.log("Parabéns, tu foi o GANHADOR!");
        console.log("**********************************************");
    }
}

console.log("\nVerificação Concluída");