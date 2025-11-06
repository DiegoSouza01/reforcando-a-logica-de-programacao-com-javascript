/*
    Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
    variável identificadora que calcule a operação conforme a informação contida nesta
    variável:
    1- soma dos elementos;
    2- produto dos elementos;
    3- média dos elementos;
    4- ordene os elementos em ordem crescente;
    5- mostre o vetor.
*/

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let TAMANHO_VETOR = 6;
let vetor = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < TAMANHO_VETOR; i++) {
    vetor.push(getNumeroAleatorio(1, 10));
}

console.log("Operações em Vetor");
console.log(`Vetor gerado: [ ${vetor.join(', ')} ]\n`);

console.log("Escolha a operação (1-5):");
console.log("1: Soma dos elementos");
console.log("2: Produto dos elementos");
console.log("3: Média dos elementos");
console.log("4: Ordenar elementos (crescente)");
console.log("5: Mostrar o vetor");

rl.question("\nDigite o número da operação desejada: ", (resposta) => {
    
    let operacao = parseInt(resposta);
    console.log("\nResultado");

    switch (operacao) {
        case 1:
            let soma = vetor.reduce((acumulador, valor) => acumulador + valor, 0);
            console.log(`(1) Soma dos elementos: ${soma}`);
            break;

        case 2:
            let produto = vetor.reduce((acumulador, valor) => acumulador * valor, 1);
            console.log(`(2) Produto dos elementos: ${produto}`);
            break;

        case 3:
            let somaParaMedia = vetor.reduce((acc, val) => acc + val, 0);
            let media = somaParaMedia / vetor.length;
            console.log(`(3) Média dos elementos: ${media.toFixed(2)}`);
            break;

        case 4:
            vetor.sort((a, b) => a - b);
            console.log(`(4) Vetor ordenado: [ ${vetor.join(', ')} ]`);
            break;

        case 5:
            console.log(`(5) Mostrar vetor: [ ${vetor.join(', ')} ]`);
            break;

        default:
            console.log("Operação inválida. Tente um número de 1 a 5.");
    }

    rl.close();
});