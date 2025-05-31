/*
    Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.
*/

const prompt = require('prompt-sync')();

// Entrada de dados: quantidade de cigarros fumados por dia e anos fumando
let cigarrosPorDia = parseInt(prompt('Quantos cigarros você fuma por dia? '));
let anosFumando = parseInt(prompt('Há quantos anos você fuma? '));

// Cálculo do total de cigarros fumados
let totalCigarros = cigarrosPorDia * 365 * anosFumando;

// Cálculo da perda de vida em minutos
let perdaVidaMinutos = totalCigarros * 10;

// Cálculo da perda de vida em dias
let perdaVidaDias = perdaVidaMinutos / (60 * 24);

// Exibição do resultado
console.log(`Você perderá aproximadamente ${Math.round(perdaVidaDias)} dias de vida devido ao fumo. Fume com moderação!`);