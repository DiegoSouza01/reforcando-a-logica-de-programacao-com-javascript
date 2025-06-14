/*
    Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
    dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
    os dados das pessoas menores de idade.
*/

const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

// Ler o nome e a idade de 9 pessoas
for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    let idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}: `));
    
    nomes.push(nome);
    idades.push(idade);
}

// Exibir os dados das pessoas menores de idade
console.table('Pessoas menores de idade:');

// Percorrer o vetor de idades e exibir os nomes e idades das pessoas menores de idade
for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
}