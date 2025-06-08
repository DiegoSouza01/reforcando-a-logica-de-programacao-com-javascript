/*
    Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci.
*/

//Vetor para armazenar os elementos da sequência de Fibonacci
let fibonacci = [];

// Preenchendo o vetor com os primeiros 15 elementos da sequência de Fibonacci
for (let i = 0; i < 15; i++) {
    if (i === 0 || i === 1) {
        // Os dois primeiros elementos são 1
        fibonacci[i] = 1;
    } else {
        // Cada elemento é a soma dos dois anteriores
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
}

// Exibindo o vetor preenchido
console.log(fibonacci);

