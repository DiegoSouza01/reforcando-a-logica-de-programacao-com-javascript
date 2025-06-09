/*
    Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
    mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
    que eles foram informados.
*/

const prompt = require('prompt-sync')();

// Vetor para armazenar os nomes
let nomes = [];

// Lendo 7 nomes de pessoas
for (let i = 0; i < 7; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    nomes.push(nome);
}

// Exibindo os nomes na ordem inversa
console.log(nomes.reverse());