/*
    Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
    quantidade de elementos negativos da linha correspondente de M.
*/

let LINHAS = 6;
let COLUNAS = 8;

let M = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < LINHAS; i++) {
    let linhaAtual = [];
    for (let j = 0; j < COLUNAS; j++) {
        linhaAtual.push(getNumeroAleatorio(-10, 10));
    }
    M.push(linhaAtual);
}

let vetorC = [];

for (let i = 0; i < LINHAS; i++) {
    
    let contagemNegativosNaLinha = 0;
    
    for (let j = 0; j < COLUNAS; j++) {
        
        if (M[i][j] < 0) {
            contagemNegativosNaLinha++;
        }
    }
    
    vetorC.push(contagemNegativosNaLinha);
}

console.log(" Matriz M[6, 8] Gerada ");

for (const linha of M) {
    let linhaFormatada = linha
        .map(num => String(num).padStart(3, ' '))
        .join(' | ');
        
    console.log(linhaFormatada);
}

console.log("\n Vetor C (Contagem de Negativos por Linha) ");
console.log(vetorC);