/*
    Crie um objeto chamado dados que contém várias propriedades, incluindo números,
    strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
    propriedades que são arrays.
*/

let dados = {
    id: 945,
    relatorio: "Vendas Trimestrais",
    ativo: true,
    funcionarios: ["Ana Silva", "Bruno Costa", "Carla Dias"],
    metas: [150, 300, 500],
    cidade: "São Paulo",
    configuracoes: { tema: "dark" },
    codigos: [9001, 9002, 9003]
};
 
function filtrarPropriedadesDeArray(objetoOriginal) {
    
    let novoObjeto = {};

    for (let chave in objetoOriginal) {
        
        let valor = objetoOriginal[chave];

        if (Array.isArray(valor)) {

            novoObjeto[chave] = valor;
        }
    }

    return novoObjeto;
}

console.log("Objeto Original 'dados'");
console.log(JSON.stringify(dados, null, 2));

let apenasArrays = filtrarPropriedadesDeArray(dados);

console.log("\n\nNovo Objeto (Apenas com Arrays)");console.log(JSON.stringify(apenasArrays, null, 2));