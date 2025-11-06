/*
    Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
    a) da linha 4 de M;
    b) da coluna 2 de M;
    c) da diagonal principal;
    d) todos os elementos da matriz M.
    Escrever essas somas e a matriz.
*/

let TAMANHO = 5;
let M = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imprimirMatriz(matriz) {
    console.log("\n Matriz M(5, 5) Gerada: ");
    // Header das colunas
    console.log("      (C 0) (C 1) (C 2) (C 3) (C 4)");
    
    for (let i = 0; i < matriz.length; i++) {
        let linha = matriz[i];
        
        let linhaFormatada = linha
            .map(num => String(num).padStart(3, ' ')) 
            .join(' | ');
            
        console.log(`(L ${i}) | ${linhaFormatada}`);
    }
    console.log("\n");
}

for (let i = 0; i < TAMANHO; i++) {
    let linhaAtual = [];
    for (let j = 0; j < TAMANHO; j++) {
        linhaAtual.push(getNumeroAleatorio(1, 9));
    }
    M.push(linhaAtual);
}

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;


for (let i = 0; i < TAMANHO; i++) {
    for (let j = 0; j < TAMANHO; j++) {
        
        let elemento = M[i][j];

        somaTotal += elemento;

        if (i === 4) {
            somaLinha4 += elemento;
        }

        if (j === 2) {
            somaColuna2 += elemento;
        }

        if (i === j) {
            somaDiagonalPrincipal += elemento;
        }
    }
}

imprimirMatriz(M);

console.log("Somas Calculadas: ");
console.log(`(a) Soma da Linha 4 (índice 4): ${somaLinha4}`);
console.log(`(b) Soma da Coluna 2 (índice 2): ${somaColuna2}`);
console.log(`(c) Soma da Diagonal Principal: ${somaDiagonalPrincipal}`);
console.log(`(d) Soma Total de todos os elementos: ${somaTotal}`);