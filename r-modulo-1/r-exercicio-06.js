/*
    Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.
*/
const prompt = require('prompt-sync')();

// Função para obter o palpite do usuário
function obterPalpiteUsuario() {
    let palpite;
    do {
        palpite = parseInt(prompt("Adivinhe o número sorteado entre 1 e 5: "));
    } while (isNaN(palpite) || palpite < 1 || palpite > 5);
    return palpite;
}

// Função para sortear um número entre 1 e 5
function sortearNumero() {
    return Math.floor(Math.random() * 5) + 1; // Gera um número entre 1 e 5
}

// Função principal do jogo
function jogar() {
    let numeroSorteado = sortearNumero();
    let palpiteUsuario = obterPalpiteUsuario();

    console.log(`Você escolheu: ${palpiteUsuario}`);
    console.log(`O número sorteado foi: ${numeroSorteado}`);

    if (palpiteUsuario === numeroSorteado) {
        console.log('Parabéns! Você acertou!');
    } else {
        console.log('Que pena! Você errou. Tente novamente!');
    }
}

// Iniciar o jogo
function iniciarJogo() {
    console.log("Bem-vindo ao jogo de adivinhação!");
    jogar();
}

// Executar o jogo
iniciarJogo();