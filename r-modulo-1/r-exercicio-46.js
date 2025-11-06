/*
    Suponha que você tem um array de objetos onde cada objeto representa uma venda
    com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
    de vendas por vendedor.
*/

function sumarizarVendas(arrayDeVendas) {
    
    let totaisPorVendedor = {};

    for (let venda of arrayDeVendas) {
        
        let vendedor = venda.vendedor;
        let valor = venda.valor;

        if (totaisPorVendedor[vendedor]) {
            
            totaisPorVendedor[vendedor] = totaisPorVendedor[vendedor] + valor;
            
        } else {
            
            totaisPorVendedor[vendedor] = valor;
        }
    }
    return totaisPorVendedor;
}

let vendas = [
    { vendedor: "Ana", valor: 100 },
    { vendedor: "Bruno", valor: 150 },
    { vendedor: "Ana", valor: 200 },
    { vendedor: "Carla", valor: 50 },
    { vendedor: "Bruno", valor: 300 },
    { vendedor: "Ana", valor: 50 },
    { vendedor: "Carla", valor: 120 }
];

console.log("Sumarizador de Vendas");
console.log("Array Original de Vendas:");
console.log(JSON.stringify(vendas, null, 2));

let sumario = sumarizarVendas(vendas);

console.log("\nResultado (Objeto Sumarizado por Vendedor)");
console.log(sumario);