/*
    Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
    entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
    depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

const prompt = require('prompt-sync')();

let numeros = [];

// Preencher o vetor com números aleatórios entre 0 e 99
for (let i = 0; i < 20; i++) {
    let numero = Math.floor(Math.random() * 100);
    numeros.push(numero);
}

// Exibir os números gerados
console.log('Números gerados:');

// Exibir cada número do vetor
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Ordenar o vetor em ordem crescente
numeros.sort((a, b) => a - b);

// Exibir os números ordenados
console.log('Números ordenados:');

// Exibir cada número do vetor ordenado
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}