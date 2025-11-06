/*
    Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
    idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
    nome e idade.
*/

let pessoa = {
    nome: "Fulano de Tal",
    idade: 30
};

console.log("Objeto Inicial");
console.log(pessoa);
console.log("\n");

let idadeDaPessoa = pessoa.idade;

console.log("Acessando a Idade");
console.log(`Valor da propriedade 'idade': ${idadeDaPessoa}`);
console.log("\n");

pessoa.email = "fulano.tal@exemplo.com";

console.log("Objeto Modificado (com email)");
console.log(pessoa);