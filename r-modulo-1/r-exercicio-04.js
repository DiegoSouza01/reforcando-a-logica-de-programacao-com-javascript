/*
    Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/

const prompt = require('prompt-sync')();

// Entrada de dados: comprimentos dos segmentos de reta
let a = parseFloat(prompt('Comprimento do primeiro segmento: '));
let b = parseFloat(prompt('Comprimento do segundo segmento: '));
let c = parseFloat(prompt('Comprimento do terceiro segmento: '));

// Verificação se é possível formar um triângulo
if (a + b > c && a + c > b && b + c > a) {
    console.log('É possível formar um triângulo com esses segmentos.');
} else {
    console.log('Não é possível formar um triângulo com esses segmentos.');
}