/*
    Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
    Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
    todos os elementos de V diferentes de A. Mostre os resultados.
*/

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let TAMANHO = 30;
let V = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < TAMANHO; i++) {
    let linhaAtual = [];
    for (let j = 0; j < TAMANHO; j++) {
        linhaAtual.push(getNumeroAleatorio(1, 10));
    }
    V.push(linhaAtual);
}

console.log(`Matriz V(${TAMANHO}, ${TAMANHO}) gerada com ${TAMANHO * TAMANHO} elementos.`);

function processarMatriz(valorA) {
    
    let contagemA = 0;

    let matrizX = Array.from({ length: TAMANHO }, () => 
        new Array(TAMANHO).fill(0)
    );

    let xLinha = 0;
    let xColuna = 0;
    
    for (let i = 0; i < TAMANHO; i++) {
        
        for (let j = 0; j < TAMANHO; j++) {
            
            let elemento = V[i][j];

            if (elemento === valorA) {
                contagemA++;
            } 
            
            else {
                
                if (xLinha < TAMANHO) { 
                    matrizX[xLinha][xColuna] = elemento;

                    xColuna++;
                    
                    if (xColuna === TAMANHO) {
                        xColuna = 0;
                        xLinha++;
                    }
                }
            }
        }
    }

    console.log("\nResultados:");
    console.log(`O valor A (${valorA}) foi encontrado ${contagemA} vezes na matriz V.`);
    
    let totalElementos = TAMANHO * TAMANHO;
    let elementosEmX = totalElementos - contagemA;
    
    console.log(`A matriz X foi preenchida com ${elementosEmX} elementos diferentes de A.`);
    console.log(`(Os ${contagemA} espaços restantes em X foram preenchidos com 0).`);

    console.log("\nAmostra da Matriz X (primeiras 10 linhas)");
    for (let i = 0; i < 10; i++) {
        let linhaFormatada = matrizX[i]
            .map(num => String(num).padStart(2, ' '))
            .join(' | ');
        console.log(linhaFormatada);
    }
    if (TAMANHO > 10) {
        console.log("... (e mais 20 linhas)");
    }
}

rl.question("Digite o número inteiro A (de 1 a 10) para procurar: ", (resposta) => {
    
    let A = parseInt(resposta);

    if (isNaN(A)) {
        console.log("Entrada inválida. Usando A = 5 como padrão.");
        A = 5;
    }

    processarMatriz(A);
    rl.close();
});