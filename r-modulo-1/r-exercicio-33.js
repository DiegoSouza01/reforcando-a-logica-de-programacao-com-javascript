/*
    Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
    elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

let TAMANHO = 3;
let M = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < TAMANHO; i++) {
    let linhaAtual = [];
    for (let j = 0; j < TAMANHO; j++) {
        linhaAtual.push(getNumeroAleatorio(1, 10));
    }
    M.push(linhaAtual);
}

let somaDiagonalSecundaria = 0;

for (let i = 0; i < TAMANHO; i++) {
    let j = (TAMANHO - 1) - i;
    somaDiagonalSecundaria += M[i][j];
}

let mediaDiagonalSecundaria = somaDiagonalSecundaria / TAMANHO;

let M_Modificada = M.map(linha => [...linha]);

for (let i = 0; i < TAMANHO; i++) {
    let valorOriginal = M_Modificada[i][i];
    
    M_Modificada[i][i] = valorOriginal * mediaDiagonalSecundaria;
}

function imprimirMatriz(titulo, matriz, casasDecimais = 0) {
    console.log(titulo);
    let padding = casasDecimais > 0 ? 8 : 4; 
    
    for (let linha of matriz) {
        let linhaFormatada = linha.map(num => {
            let numStr = num.toFixed(casasDecimais);
            return numStr.padStart(padding, ' ');
        }).join(' | ');
        console.log(linhaFormatada);
    }
    console.log("\n");
}

imprimirMatriz(" Matriz Original M(3, 3) ", M, 0);

console.log(" Cálculos");
console.log(`Elementos da Diagonal Secundária (M[0][2], M[1][1], M[2][0]): ${M[0][2]}, ${M[1][1]}, ${M[2][0]}`);
console.log(`Soma da Diagonal Secundária: ${somaDiagonalSecundaria}`);
console.log(`Média da Diagonal Secundária (Soma / 3): ${mediaDiagonalSecundaria.toFixed(2)}`);
console.log("\n");

imprimirMatriz(
    " Matriz Modificada (Diagonal Principal * Média)",
    M_Modificada,
    2
);