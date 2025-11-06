/*
    Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
    cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
    multiplicações.
*/

let TAMANHO = 50;
let M = [];

function getNumeroRealAleatorio(min, max, casasDecimais) {
    let num = Math.random() * (max - min) + min;
    return parseFloat(num.toFixed(casasDecimais));
}

for (let i = 0; i < TAMANHO; i++) {
    let linhaAtual = [];
    for (let j = 0; j < TAMANHO; j++) {
        linhaAtual.push(getNumeroRealAleatorio(1.0, 10.0, 1));
    }
    M.push(linhaAtual);
}

console.log(`Matriz M(${TAMANHO}, ${TAMANHO}) gerada com sucesso.\n`);
console.log("Iniciando processamento (multiplicando linhas)...");

for (let i = 0; i < TAMANHO; i++) {
    
    let multiplicador = M[i][i];
    
    for (let j = 0; j < TAMANHO; j++) {
        
        M[i][j] = M[i][j] * multiplicador;
    }
}

console.log("Processamento concluído.\n");

function imprimirAmostraMatriz(titulo, matriz, tamanhoAmostra) {
    console.log(titulo);
    console.log(`(Exibindo as primeiras ${tamanhoAmostra} linhas e ${tamanhoAmostra} colunas)\n`);
    
    for (let i = 0; i < tamanhoAmostra; i++) {
        let linhaCompleta = matriz[i];
        
        let amostraDaLinha = linhaCompleta.slice(0, tamanhoAmostra);
        
        let linhaFormatada = amostraDaLinha.map(num => {
            return num.toFixed(2).padStart(8, ' ');
        }).join(' | ');
        
        console.log(linhaFormatada);
    }
    
    if (matriz.length > tamanhoAmostra) {
        console.log(`\n... (e mais ${matriz.length - tamanhoAmostra} linhas)`);
    }
}

imprimirAmostraMatriz(
    `Amostra 10x10 da Matriz Modificada`,
    M,
    10
);