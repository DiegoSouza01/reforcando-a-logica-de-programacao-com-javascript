/*
    Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
    conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
    estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
    vetor pode ser preenchido quantas vezes forem necessárias.
*/

let TOTAL_VALORES = 30;
let MAX_VETOR = 5;

let vetPares = [];
let vetImpares = [];

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Iniciando a leitura de ${TOTAL_VALORES} valores`);
console.log(`(Tamanho máximo de cada vetor: ${MAX_VETOR})\n`);

for (let i = 1; i <= TOTAL_VALORES; i++) {
    
    let valorLido = getNumeroAleatorio(1, 100);
    
    if (valorLido % 2 === 0) {
        vetPares.push(valorLido);
        console.log(`(Lido ${i}/${TOTAL_VALORES}): ${valorLido} -> (Adicionado aos PARES)`);

        if (vetPares.length === MAX_VETOR) {
            console.log("=================================================");
            console.log(`Vetor PARES CHEIO. Imprimindo: [ ${vetPares.join(', ')} ]`);
            console.log("=================================================");
            vetPares = [];
        }
        
    } else {
        vetImpares.push(valorLido);
        console.log(`(Lido ${i}/${TOTAL_VALORES}): ${valorLido} -> (Adicionado aos ÍMPARES)`);
        
        if (vetImpares.length === MAX_VETOR) {
            console.log("===================================================");
            console.log(`Vetor ÍMPARES CHEIO. Imprimindo: [ ${vetImpares.join(', ')} ]`);
            console.log("===================================================");
            vetImpares = []; // Esvazia o vetor para recomeçar
        }
    }
}

console.log("\nLeitura dos 30 valores terminada");
console.log("Imprimindo o conteúdo restante dos vetores:");

if (vetPares.length > 0) {
    console.log(`Restante em PARES: [ ${vetPares.join(', ')} ]`);
} else {
    console.log("Restante em PARES: (Vazio)");
}

if (vetImpares.length > 0) {
    console.log(`Restante em ÍMPARES: [ ${vetImpares.join(', ')} ]`);
} else {
    console.log("Restante em ÍMPARES: (Vazio)");
}