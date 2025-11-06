/*
    Escreva uma função que conte quantas propriedades do tipo string existem em um
    objeto e retorne esse número.
*/

function contarStringsNoObjeto(obj) {
    let contador = 0;

    for (let chave in obj) {
 
        if (obj.hasOwnProperty(chave)) {
            
            let valor = obj[chave];

            if (typeof valor === 'string') {
                contador++;
            }
        }
    }

    return contador;
}

let objetoTeste = {
    titulo: "Relatório Anual",
    ano: 2025,
    autor: "Equipe de Dados",
    ativo: true,
    clientes: ["Empresa A", "Empresa B"],
    cidade: "Porto Alegre",
    meta: null     
};

console.log("Verificador de Strings em Objeto");
console.log("Objeto de Teste:");
console.log(objetoTeste);

let totalDeStrings = contarStringsNoObjeto(objetoTeste);

console.log("\nResultado");
console.log(`O objeto possui ${totalDeStrings} propriedades do tipo 'string'.`);