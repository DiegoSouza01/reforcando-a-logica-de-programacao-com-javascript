/*
    Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
*/

const prompt = require('prompt-sync')();

// Entrada de dados: distância da viagem
let distancia = parseFloat(prompt('Qual é a distância da viagem em Km? '));

// Preço por Km
let precoPorKm;
if (distancia <= 200) {
    precoPorKm = 0.50; // Preço para viagens até 200 Km
} else {
    precoPorKm = 0.45; // Preço para viagens acima de 200 Km
}

// Cálculo do preço da passagem
let precoPassagem = distancia * precoPorKm;

// Saída de dados: preço da passagem
console.log(`O preço da passagem é R$ ${precoPassagem.toFixed(2)}`);