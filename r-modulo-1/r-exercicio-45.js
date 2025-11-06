/*
    Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
    o número de vezes que a string aparece no array.
*/

function contarOcorrencias(array) {
    
    let objetoContagem = {};

    for (let item of array) {
        
        if (objetoContagem[item]) {
            objetoContagem[item] = objetoContagem[item] + 1;
            
        } else {
            objetoContagem[item] = 1;
        }
    }
    return objetoContagem;
}

let arrayDeFrutas = [
    "maçã",
    "banana",
    "uva",
    "maçã",
    "laranja",
    "banana",
    "maçã",
    "pera",
    "uva"
];

console.log("Contador de Ocorrências");
console.log("Array Original:");
console.log(arrayDeFrutas);

let contagemFinal = contarOcorrencias(arrayDeFrutas);

console.log("\nResultado (Objeto de Contagem)");
console.log(contagemFinal);