/*
    Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
    vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

let TAMANHO_A = 100;
let A = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < TAMANHO_A; i++) {
    A.push(getNumeroAleatorio(-10, 20));
}

let B = A.filter(elemento => elemento > 0);

let B_alternativo = [];
for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
        B_alternativo.push(A[i]);
    }
}

console.log(`Vetor Original A (${A.length} posições)`);
console.log(`[ ${A.join(', ')} ]`);


console.log(`Vetor Compactado B (${B.length} posições)`);
console.log("(Valores nulos e negativos foram removidos)");
console.log(`[ ${B.join(', ')} ]`);