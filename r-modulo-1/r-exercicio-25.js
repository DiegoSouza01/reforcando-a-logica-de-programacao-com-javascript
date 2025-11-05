/*
    Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
    de cada coluna separadamente.
*/

let LINHAS = 15;
let COLUNAS = 20;
let M = [];

function getNumeroRealAleatorio(min, max, casasDecimais) {
    let num = Math.random() * (max - min) + min;
    return parseFloat(num.toFixed(casasDecimais));
}

for (let i = 0; i < LINHAS; i++) {
    let linhaAtual = [];
    for (let j = 0; j < COLUNAS; j++) {
        linhaAtual.push(getNumeroRealAleatorio(0, 50, 2));
    }
    M.push(linhaAtual);
}

console.log(`Matriz M[${LINHAS}, ${COLUNAS}] gerada com sucesso.`);

let somaColunas = new Array(COLUNAS).fill(0);

for (let i = 0; i < LINHAS; i++) {
    
    for (let j = 0; j < COLUNAS; j++) {
    
        somaColunas[j] = somaColunas[j] + M[i][j];
    }
}

console.log("\nSoma de Cada Coluna: ");

for (let j = 0; j < somaColunas.length; j++) {
    let somaFormatada = somaColunas[j].toFixed(2);
    
    let indiceFormatado = String(j).padStart(2, '0');

    console.log(`Soma da Coluna ${indiceFormatado}: ${somaFormatada}`);
}