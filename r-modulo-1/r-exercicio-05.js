/*
    Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

const prompt = require('prompt-sync')();

// Função para obter a escolha do usuário
function obterEscolhaUsuario() {
    let escolha;
    do {
        escolha = prompt("Escolha Pedra, Papel ou Tesoura: ").toLowerCase();
    } while (!['pedra', 'papel', 'tesoura'].includes(escolha));
    return escolha;
}

// Função para obter a escolha do computador
function obterEscolhaComputador() {
    let escolhas = ['pedra', 'papel', 'tesoura'];
    let indiceAleatorio = Math.floor(Math.random() * escolhas.length);
    return escolhas[indiceAleatorio];
}

// Função para determinar o vencedor
function determinarVencedor(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
        return 'Empate!';
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        return 'Você ganhou!';
    } else {
        return 'O computador ganhou!';
    }
}	

// Função principal do jogo
function jogar() {
    let escolhaUsuario = obterEscolhaUsuario();
    let escolhaComputador = obterEscolhaComputador();

    console.log(`Você escolheu: ${escolhaUsuario}`);
    console.log(`O computador escolheu: ${escolhaComputador}`);

    let resultado = determinarVencedor(escolhaUsuario, escolhaComputador);
    console.log(resultado);
}

// Iniciar o jogo
function iniciarJogo() {
    console.log("Bem-vindo ao jogo de JoKenPo!");
    jogar();
}

// Executar o jogo
iniciarJogo();