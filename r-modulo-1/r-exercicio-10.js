/*
    Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
    cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
    a) O somatório entre todos os valores;
    b) Qual foi o menor valor digitado;
    c) A média entre todos os valores;
    d) Quantos valores são pares.
*/

const prompt = require('prompt-sync')();

let continuar = true;
let soma = 0;
let menor = Infinity; // Inicializa com o maior valor possível
let contagem = 0;
let pares = 0;

do {
    let numero = parseFloat(prompt('Digite um número: '));
    
    // Atualiza o somatório (O somatório entre todos os valores)
    soma += numero;
    
    // Verifica se é o menor valor (Qual foi o menor valor digitado)
    if (numero < menor) {
        menor = numero;
    }
    
    // Conta os números pares (Quantos valores são pares)
    if (numero % 2 === 0) {
        pares++;
    }
    
    contagem++;
    
    // Pergunta se o usuário deseja continuar
    let resposta = prompt('Deseja continuar? (S/N): ').toUpperCase();
    continuar = resposta === 'S';
} while (continuar);

// Calcula a média (A média entre todos os valores)
let media = contagem > 0 ? soma / contagem : 0;

// Resultados
console.log(`Somatório: ${soma}`);
console.log(`Menor valor digitado: ${menor}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Quantidade de valores pares: ${pares}`);