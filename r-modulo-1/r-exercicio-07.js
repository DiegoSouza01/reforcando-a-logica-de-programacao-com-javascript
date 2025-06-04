/*
    Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir: Carros populares - Até 100 Km percorridos: R$ 0,20 por Km - Acima de 100 Km percorridos: R$ 0,10 por Km Carros de luxo - Até 200 Km percorridos: R$ 0,30 por Km - Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require('prompt-sync')();

// Função para obter o tipo de carro alugado
function obterTipoCarro() {
    let tipo;
    do {
        tipo = prompt("Digite o tipo de carro (popular ou luxo): ").toLowerCase();
    } while (!['popular', 'luxo'].includes(tipo));
    return tipo;
}

// Função para obter o número de dias de aluguel
function obterDiasAluguel() {
    let dias;
    do {
        dias = parseInt(prompt("Digite o número de dias de aluguel: "));
    } while (isNaN(dias) || dias <= 0);
    return dias;
}

// Função para obter a quantidade de Km percorridos
function obterKmPercorridos() {
    let km;
    do {
        km = parseInt(prompt("Digite a quantidade de Km percorridos: "));
    } while (isNaN(km) || km < 0);
    return km;
}

// Função para calcular o preço do aluguel
function calcularPreco(tipo, dias, km) {
    let precoBase;
    let precoKm;

    if (tipo === 'popular') {
        precoBase = 90 * dias; // R$ 90,00 por dia
        if (km <= 100) {
            precoKm = km * 0.20; // R$ 0,20 por Km
        } else {
            precoKm = (100 * 0.20) + ((km - 100) * 0.10); // R$ 0,10 por Km acima de 100
        }
    } else { // tipo === 'luxo'
        precoBase = 150 * dias; // R$ 150,00 por dia
        if (km <= 200) {
            precoKm = km * 0.30; // R$ 0,30 por Km
        } else {
            precoKm = (200 * 0.30) + ((km - 200) * 0.25); // R$ 0,25 por Km acima de 200
        }
    }

    return precoBase + precoKm;
}

// Função principal do programa
function calcularAluguel() {
    let tipoCarro = obterTipoCarro();
    let diasAluguel = obterDiasAluguel();
    let kmPercorridos = obterKmPercorridos();

    let precoTotal = calcularPreco(tipoCarro, diasAluguel, kmPercorridos);
    
    console.log(`O preço total a ser pago pelo aluguel é: R$ ${precoTotal.toFixed(2)}`);
}

// Iniciar o cálculo do aluguel
function iniciarCalculo() {
    console.log("Bem-vindo ao sistema de cálculo de aluguel de carros!");
    calcularAluguel();
}

// Executar o cálculo do aluguel
iniciarCalculo();