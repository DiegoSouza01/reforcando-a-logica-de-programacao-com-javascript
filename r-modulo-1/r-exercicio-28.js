/*
    Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
    item:
    a) a soma dos elementos acima da diagonal principal;
    b) a soma dos elementos abaixo da diagonal principal;
*/

let TAMANHO = 10;
let M = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imprimirMatriz(matriz) {
    console.log(` Matriz M(${TAMANHO}, ${TAMANHO}) Gerada `);
    console.log("    (Colunas 0 a 9) ->\n");
    
    for (let i = 0; i < matriz.length; i++) {
        let linha = matriz[i];
        
        let linhaFormatada = linha
            .map(num => String(num).padStart(2, ' ')) 
            .join(' | ');
            
        console.log(`(L ${String(i).padStart(2, ' ')}) ${linhaFormatada}`);
    }
    console.log("\n");
}


for (let i = 0; i < TAMANHO; i++) {
    let linhaAtual = [];
    for (let j = 0; j < TAMANHO; j++) {
        linhaAtual.push(getNumeroAleatorio(1, 10));
    }
    M.push(linhaAtual);
}

imprimirMatriz(M);

let somaAcimaDiagonal = 0;
let somaAbaixoDiagonal = 0;

for (let i = 0; i < TAMANHO; i++) {
    
    for (let j = 0; j < TAMANHO; j++) {
        
        if (j > i) {
            somaAcimaDiagonal += M[i][j];
        } 
        
        else if (i > j) {
            somaAbaixoDiagonal += M[i][j];
        }

    }
}

console.log(" Resultados das Somas ");
console.log(`(a) Soma dos elementos ACIMA da diagonal principal: ${somaAcimaDiagonal}`);
console.log(`(b) Soma dos elementos ABAIXO da diagonal principal: ${somaAbaixoDiagonal}`);