/*
    Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
    P[1..3,1..5].
*/

let LINHAS = 3;
let COLUNAS = 5;

let A = [];
let B = [];
let P = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imprimirMatriz(titulo, matriz) {
    console.log(titulo);
    for (let linha of matriz) {
        let linhaFormatada = linha
            .map(num => String(num).padStart(4, ' '))
            .join(' | ');
        console.log(linhaFormatada);
    }
    console.log("\n");
}

for (let i = 0; i < LINHAS; i++) {
    let linhaAtual = [];
    for (let j = 0; j < COLUNAS; j++) {
        linhaAtual.push(getNumeroAleatorio(1, 10));
    }
    A.push(linhaAtual);
}

for (let i = 0; i < LINHAS; i++) {
    let linhaAtual = [];
    for (let j = 0; j < COLUNAS; j++) {
        linhaAtual.push(getNumeroAleatorio(1, 10));
    }
    B.push(linhaAtual);
}

for (let i = 0; i < LINHAS; i++) {
    let linhaProduto = [];
    for (let j = 0; j < COLUNAS; j++) {
        let produto = A[i][j] * B[i][j];
        linhaProduto.push(produto);
    }
    P.push(linhaProduto);
}



imprimirMatriz(" Matriz A[3, 5] ", A);
imprimirMatriz(" Matriz B[3, 5] ", B);
imprimirMatriz(" Matriz Produto P[3, 5] (P[i,j] = A[i,j] * B[i,j]) ", P);