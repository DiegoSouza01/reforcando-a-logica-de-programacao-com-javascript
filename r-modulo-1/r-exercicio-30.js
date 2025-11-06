/*
    Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
    contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
    e os vetores criados.
*/

let TAMANHO = 5;
let M = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imprimirResultado(matriz, somasLinhas, somasColunas) {
    console.log("\n Matriz M(5, 5) Gerada");
    console.log("      (C 0) (C 1) (C 2) (C 3) (C 4)   | (Soma Linha)");
    
    for (let i = 0; i < matriz.length; i++) {
        let linha = matriz[i];
        
        let linhaFormatada = linha
            .map(num => String(num).padStart(3, ' ')) 
            .join(' | ');
            
        let somaLinhaFormatada = String(somasLinhas[i]).padStart(3, ' ');
        console.log(`(L ${i}) | ${linhaFormatada}   | ${somaLinhaFormatada}`);
    }
    
    console.log("(Soma Coluna)");
    
    let scFormatado = somasColunas
        .map(soma => String(soma).padStart(3, ' '))
        .join(' | ');
        
    console.log(`       ${scFormatado}`);
    
    console.log("\n");
}

for (let i = 0; i < TAMANHO; i++) {
    let linhaAtual = [];
    for (let j = 0; j < TAMANHO; j++) {
        linhaAtual.push(getNumeroAleatorio(1, 9));
    }
    M.push(linhaAtual);
}


let SL = new Array(TAMANHO).fill(0);
let SC = new Array(TAMANHO).fill(0);

for (let i = 0; i < TAMANHO; i++) {
    for (let j = 0; j < TAMANHO; j++) {
        
        let elemento = M[i][j];

        SL[i] = SL[i] + elemento;
        
        SC[j] = SC[j] + elemento;
    }
}

imprimirResultado(M, SL, SC);