/*
    Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h -1 , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require('prompt-sync')();

// Entrada de dados: velocidade do carro
let velocidade = parseFloat(prompt('Qual é a velocidade do carro em Km/h? '));

// Velocidade máxima permitida
let velocidadeMaxima = 80;

// Verificação da velocidade
if (velocidade > velocidadeMaxima) {
    // Cálculo da multa
    let excesso = velocidade - velocidadeMaxima;
    let valorMulta = excesso * 5;

    // Exibição da mensagem de multa
    console.log(`Você foi multado por exceder a velocidade permitida!`);
    console.log(`Velocidade: ${velocidade} Km/h`);
    console.log(`Excesso: ${excesso} Km/h`);
    console.log(`Valor da multa: R$ ${valorMulta.toFixed(2)}`);
}