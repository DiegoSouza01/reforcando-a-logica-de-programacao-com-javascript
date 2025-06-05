/*
    Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
*/

const prompt = require('prompt-sync')();

// Variáveis para armazenar os totais
let continuar = true;
let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

// Loop para ler os dados dos funcionários
while (continuar) {
    let salario = parseFloat(prompt('Digite o salário do funcionário: '));
    let sexo = prompt('Digite o sexo do funcionário (M/F): ').toUpperCase();

    if (sexo === 'M') {
        totalSalarioHomens += salario;
    } else if (sexo === 'F') {
        totalSalarioMulheres += salario;
    } else {
        console.log('Sexo inválido. Por favor, digite M para masculino ou F para feminino.');
        //voltar ao início do loop
        continue;
    }

    // Perguntar se o usuário deseja continuar
    let resposta = prompt('Deseja continuar? (S/N): ').toUpperCase();
    continuar = resposta === 'S';
    if (resposta !== 'S' && resposta !== 'N') {
        console.log('Resposta inválida. Por favor, digite S para sim ou N para não.');
        continuar = false; // Encerra o loop se a resposta for inválida
    }
}

// Exibir os totais
console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);