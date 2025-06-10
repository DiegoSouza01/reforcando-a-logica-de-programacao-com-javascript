/*
    Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
    final, mostre quais são os números pares que foram digitados e em que posições eles
    estão armazenados.
*/

const prompt = require('prompt-sync')();

// Vetor para armazenar os números
let numeros = [];

// Ler 10 números inteiros
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
}

// Exibir números pares e suas posições
console.log('Números pares e suas posições:');
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Número: ${numeros[i]}, Posição: ${i}`);
    }
}