/*
    Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
    combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
    sobre as do obj1 em caso de conflitos.
*/

function combinarObjetos(obj1, obj2) {
    
    let novoObjeto = { ...obj1, ...obj2 };
    
    return novoObjeto;
}

let obj1 = {
    nome: "Carlos",
    idade: 40,
    cidade: "São Paulo",
    ativo: true
};

let obj2 = {
    idade: 41, 
    profissao: "Designer",
    ativo: false
};

console.log("Objeto 1 (Base)");
console.log(obj1);

console.log("\nObjeto 2 (Precedência)");
console.log(obj2);

let objetoCombinado = combinarObjetos(obj1, obj2);

console.log("\nResultado (Objeto Combinado)");
console.log(objetoCombinado);