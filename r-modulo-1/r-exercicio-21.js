/*
    Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
    retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
    = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const prompt = require('prompt-sync')();

function calcularPesoIdeal(altura, sexo) {
  if (sexo.toLowerCase() === 'masculino' || sexo.toLowerCase() === 'm') {
    return 72.7 * altura - 58;
  } else if (sexo.toLowerCase() === 'feminino' || sexo.toLowerCase() === 'f') {
    return 62.1 * altura - 44.7;
  } else {
    
    // retorna null se o sexo for inválido
    return null;
  }
}

// Solicita os dados do usuário
let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
let sexo = prompt("Digite seu sexo (masculino ou feminino):");

// Calcula o peso ideal
let pesoIdeal = calcularPesoIdeal(altura, sexo);

// Exibe o resultado no console
if (pesoIdeal !== null) {
  console.log(`Seu peso ideal é aproximadamente: ${pesoIdeal.toFixed(2)} kg`);
} else {
  console.log("Sexo inválido. Por favor, insira 'masculino' ou 'feminino'.");
}
