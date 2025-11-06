/*
    Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
    resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
    cada), representando as apostas feitas. Compare os números das apostas com o
    resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
    corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
    e quadras, apenas por quinas.)
*/

let NUM_APOSTAS = 50;
let NUM_NUMEROS = 5;
let MIN_LOTO = 1;
let MAX_LOTO = 60;
let APOSTADOR_GANHADOR = 25; 

let gabarito = [];

function getNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarJogoUnico() {
    let jogo = new Set();
    
    while (jogo.size < NUM_NUMEROS) {
        jogo.add(getNumAleatorio(MIN_LOTO, MAX_LOTO));
    }
    
    let jogoArray = Array.from(jogo);
    
    jogoArray.sort((a, b) => a - b);
    
    return jogoArray;
}

function saoIguais(vetorA, vetorB) {
    if (vetorA.length !== vetorB.length) {
        return false;
    }
    
    for (let i = 0; i < vetorA.length; i++) {
        if (vetorA[i] !== vetorB[i]) {
            return false;
        }
    }
    
    return true;
}


gabarito = gerarJogoUnico();

console.log(" Resultado Oficial da Loto ");
let gabaritoFormatado = gabarito
    .map(n => String(n).padStart(2, '0'))
    .join(' - ');
console.log(`[ ${gabaritoFormatado} ]\n`);
console.log("Verificando Apostas");

for (let i = 1; i <= NUM_APOSTAS; i++) {
    
    let apostaAtual = [];

    if (i === APOSTADOR_GANHADOR) {
        apostaAtual = [...gabarito];
    } else {
        apostaAtual = gerarJogoUnico();
    }

    let ehGanhador = saoIguais(gabarito, apostaAtual);

    let iFormatado = String(i).padStart(2, '0');
    let apostaFormatada = apostaAtual
        .map(n => String(n).padStart(2, '0'))
        .join(', ');

    process.stdout.write(`Apostador N° ${iFormatado}: [ ${apostaFormatada} ] -> `);

    if (ehGanhador) {
        console.log("Ganhador! ⭐");
    } else {
        console.log("Não ganhou.");
    }
}

console.log("\nApuração Concluída");