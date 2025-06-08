/*
    Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
    Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

// A sequência de Fibonacci é uma série de números onde cada número é a soma dos dois anteriores.
function fibonacci(n) {
    let bona = [1, 1];
    for (let i = 2; i < n; i++) {
        bona[i] = bona[i - 1] + bona[i - 2];
    }
    return bona;
}

// Exibe os 10 primeiros elementos da sequência de Fibonacci
let n = 10;
let fibonacciSequence = fibonacci(n);

// Exibe a sequência de Fibonacci
console.log(`Os ${n} primeiros elementos da Sequência de Fibonacci são: ${fibonacciSequence.join(', ')}`);