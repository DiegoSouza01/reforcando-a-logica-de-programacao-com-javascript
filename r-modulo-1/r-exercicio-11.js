/*
    Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.
*/

const prompt = require('prompt-sync')();

// Programa para calcular os 10 primeiros termos de uma PA e a soma dos termos
let primeiroTermo = parseFloat(prompt('Digite o primeiro termo da PA: '));
let razao = parseFloat(prompt('Digite a razão da PA: '));
let termos = [];
let soma = 0;
for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    termos.push(termo);
    soma += termo;
}


// Exibe os 10 primeiros termos da PA
console.log(`Os 10 primeiros termos da PA são: ${termos.join(', ')}`);

// Exibe a soma dos termos
console.log(`A soma dos 10 primeiros termos da PA é: ${soma}`);
