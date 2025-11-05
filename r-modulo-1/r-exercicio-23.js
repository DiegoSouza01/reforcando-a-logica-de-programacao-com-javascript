/*
    Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
    diagonal principal são iguais a 1 e os demais são nulos.
*/

let N = 7;

let matrizIdentidade = [];

console.log(` Criando Matriz Identidade ${N}x${N} `);

for (let i = 0; i < N; i++) {

    let linhaAtual = [];

    for (let j = 0; j < N; j++) {

        if (i === j) {
            linhaAtual.push(1);
        } else {
            linhaAtual.push(0);
        }
    }

    matrizIdentidade.push(linhaAtual);
}

console.log("Resultado (MI[1..7, 1..7]):\n");

for (let i = 0; i < matrizIdentidade.length; i++) {

    let linha = matrizIdentidade[i];

    console.log(linha.join('  '));
}