/*
    Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
    no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    Matrícula:
    Nome:
    Salário bruto:
    Dedução INSS:
    Salário líquido:
    (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
    INSS).
*/

const prompt = require('prompt-sync')();

let funcionarios = [];
let totalFuncionarios = 2;
let inssTaxa = 0.12;
let salarioBruto, deducaoINSS, salarioLiquido;

// Função para calcular o salário líquido
function calcularSalarioLiquido(salarioBruto, taxaINSS) {
    let deducaoINSS = salarioBruto * taxaINSS;
    return salarioBruto - deducaoINSS;
}

// Ler os dados dos funcionários
for (let i = 0; i < totalFuncionarios; i++) {
    let matricula = prompt(`Digite a matrícula do funcionário ${i + 1}: `);
    let nome = prompt(`Digite o nome do funcionário ${i + 1}: `);
    salarioBruto = parseFloat(prompt(`Digite o salário bruto do funcionário ${i + 1}: `));

    // Calcular dedução INSS e salário líquido
    deducaoINSS = salarioBruto * inssTaxa;
    salarioLiquido = calcularSalarioLiquido(salarioBruto, inssTaxa);

    // Armazenar os dados do funcionário
    funcionarios.push({
        matricula: matricula,
        nome: nome,
        salarioBruto: salarioBruto,
        deducaoINSS: deducaoINSS,
        salarioLiquido: salarioLiquido
    });
}

// Exibir os contracheques
console.log("Contracheques dos Funcionários:");

// Iterar sobre os funcionários e exibir os dados
funcionarios.forEach((funcionario, index) => {
    console.log(`\nFuncionário ${index + 1}:`);
    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${funcionario.deducaoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
}
);