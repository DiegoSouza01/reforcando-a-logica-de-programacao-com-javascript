/*
    A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
    dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
    número não determinado de pessoas e retorne a média de salário da população, a
    média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
    350,00.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalPessoas = 0;
let totalSalario = 0;
let totalFilhos = 0;
let maiorSalario = 0;
let pessoasSalarioAte350 = 0;

function exibirResultados() {
    if (totalPessoas === 0) {
        console.log("\nNenhuma pessoa foi entrevistada. Encerrando.");
        rl.close();
        return;
    }

    const mediaSalario = totalSalario / totalPessoas;
    const mediaFilhos = totalFilhos / totalPessoas;
    const percSalarioAte350 = (pessoasSalarioAte350 / totalPessoas) * 100;

    console.log("\n Resultados da Pesquisa: ");
    console.log(`Média de Salário: R$ ${mediaSalario.toFixed(2)}`);
    console.log(`Média de Filhos: ${mediaFilhos.toFixed(1)}`);
    console.log(`Maior Salário: R$ ${maiorSalario.toFixed(2)}`);
    console.log(`Percentual (Salário <= R$ 350): ${percSalarioAte350.toFixed(2)}%`);
    console.log(`Total de pessoas: ${totalPessoas}`);

    rl.close();
}

function coletarDados() {

    rl.question("Digite o salário (ou deixe vazio e aperte Enter para parar): ", (salarioInput) => {

        if (salarioInput.trim() === "") {
            console.log("Coleta de dados encerrada.");
            exibirResultados();
            return;
        }

        rl.question("Digite o número de filhos: ", (filhosInput) => {
            
            const salario = parseFloat(salarioInput);
            const filhos = parseInt(filhosInput);

            if (isNaN(salario) || isNaN(filhos) || salario < 0 || filhos < 0) {
                console.log("-> Dados inválidos (salário ou filhos). Esta pessoa não será contada. Tente novamente.\n");
            } else {
                totalPessoas++;
                totalSalario += salario;
                totalFilhos += filhos;

                if (salario > maiorSalario) {
                    maiorSalario = salario;
                }
                if (salario <= 350) {
                    pessoasSalarioAte350++;
                }
                console.log("-> Dados registrados com sucesso.\n");
            }

            coletarDados();
        });
    });
}

console.log("Iniciando a pesquisa da prefeitura...");
coletarDados();