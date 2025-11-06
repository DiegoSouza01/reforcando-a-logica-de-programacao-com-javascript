/*
    Crie uma função que transforme um objeto de entrada aplicando uma função
    fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
    resultados.
*/

function mapearObjeto(objeto, callback) {
    
    let novoObjeto = {};

    let chaves = Object.keys(objeto);

    for (let chave of chaves) {
        
        let valorOriginal = objeto[chave];
        
        let valorNovo = callback(valorOriginal);
        
        novoObjeto[chave] = valorNovo;
    }

    return novoObjeto;
}

console.log(" Exemplo 1: Dobrar Valores");

let precos = {
    banana: 4,
    maca: 5,
    laranja: 3
};

function dobrar(valor) {
    return valor * 2;
}

let precosDobrados = mapearObjeto(precos, dobrar);

console.log("Objeto Original:", precos);
console.log("Objeto Mapeado (Dobrado):", precosDobrados);

console.log("\n Exemplo 2: Passar para Maiúsculas");

let equipe = {
    lider: "Ana",
    dev: "Bruno",
    qa: "Carla"
};

let paraMaiuscula = (str) => str.toUpperCase();

let equipeMaiuscula = mapearObjeto(equipe, paraMaiuscula);

console.log("Objeto Original:", equipe);
console.log("Objeto Mapeado (Maiúsculas):", equipeMaiuscula);