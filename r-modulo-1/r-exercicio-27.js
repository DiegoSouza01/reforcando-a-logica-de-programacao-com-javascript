/*
    Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
    multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
    um vetor V(36). Escrever o vetor V no final.
*/

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let LINHAS = 6;
let COLUNAS = 6;
let M = [];
let V = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imprimirMatrizM() {
    console.log("\nMatriz M(6, 6) Gerada ");
    for (let linha of M) {
        let linhaFormatada = linha
            .map(num => String(num).padStart(3, ' '))
            .join(' | ');
        console.log(linhaFormatada);
    }
    console.log("\n");
}

for (let i = 0; i < LINHAS; i++) {
    let linhaAtual = [];
    for (let j = 0; j < COLUNAS; j++) {
        linhaAtual.push(getNumeroAleatorio(1, 20));
    }
    M.push(linhaAtual);
}

function processarMatriz(valorA) {
    console.log(`Valor A lido: ${valorA}`);

    for (let i = 0; i < LINHAS; i++) {
        
        for (let j = 0; j < COLUNAS; j++) {
            
            let resultado = M[i][j] * valorA;
            
            V.push(resultado);
        }
    }

    console.log(" Vetor V(36) [M * A]");
    
    console.log(V.join(', '));
    
    console.log(`\nTotal de elementos no vetor V: ${V.length}`);
}

imprimirMatrizM();

rl.question("Digite o valor de A (o multiplicador): ", (resposta) => {
    
    let A = parseFloat(resposta);

    if (isNaN(A)) {
        console.log("Entrada inválida. Usando A = 1 como padrão.");
        A = 1;
    }
    
    processarMatriz(A);

    rl.close();
});