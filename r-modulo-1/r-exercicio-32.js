/*
    Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
    cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
    matriz lida e a modificada.
*/

let LINHAS = 12;
let COLUNAS = 13;
let M = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < LINHAS; i++) {
    let linhaAtual = [];
    for (let j = 0; j < COLUNAS; j++) {
        linhaAtual.push(getNumeroAleatorio(-25, 25));
    }
    M.push(linhaAtual);
}

let M_Modificada = M.map(linha => [...linha]);


for (let i = 0; i < LINHAS; i++) {
    
    let maiorModuloNaLinha = 0;
    
    for (let j = 0; j < COLUNAS; j++) {
        let modulo = Math.abs(M_Modificada[i][j]);
        if (modulo > maiorModuloNaLinha) {
            maiorModuloNaLinha = modulo;
        }
    }

    if (maiorModuloNaLinha !== 0) {
        
        for (let j = 0; j < COLUNAS; j++) {
            M_Modificada[i][j] = M_Modificada[i][j] / maiorModuloNaLinha;
        }
    }
}

function imprimirMatriz(titulo, matriz, casasDecimais, padding) {
    console.log(titulo);
    for (let linha of matriz) {
        let linhaFormatada = linha.map(num => {
            let numFormatado = num.toFixed(casasDecimais);
            return numFormatado.padStart(padding, ' ');
        }).join(' | ');
        console.log(linhaFormatada);
    }
    console.log("\n");
}

imprimirMatriz("Matriz Original M(12, 13)", M, 0, 4);

imprimirMatriz(
    "Matriz Modificada (Linha / Maior Módulo da Linha)",
    M_Modificada,
    3,
    7
);