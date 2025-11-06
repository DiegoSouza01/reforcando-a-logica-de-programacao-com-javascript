/*
    Você recebe um array de objetos representando transações financeiras. Cada
    transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
    onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
    essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function agruparPorCategoria(arrayDeTransacoes) {
    
    let resultado = {};

    for (let transacao of arrayDeTransacoes) {
        
        let categoria = transacao.categoria;

        if (!resultado[categoria]) {
            
            resultado[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }
        
        resultado[categoria].transacoes.push(transacao);
        
        resultado[categoria].subtotal += transacao.valor;
    }

    return resultado;
}

let transacoes = [
    { id: 101, valor: 150.00, data: "2025-11-01", categoria: "Alimentação" },
    { id: 102, valor: 50.50,  data: "2025-11-01", categoria: "Transporte" },
    { id: 103, valor: 1200.00, data: "2025-11-02", categoria: "Moradia" },
    { id: 104, valor: 80.20,  data: "2025-11-02", categoria: "Alimentação" },
    { id: 105, valor: 120.00, data: "2025-11-03", categoria: "Lazer" },
    { id: 106, valor: 45.00,  data: "2025-11-04", categoria: "Transporte" },
    { id: 107, valor: 300.00, data: "2025-11-05", categoria: "Lazer" }
];

console.log("Agregador de Transações");
console.log("Transações Originais (JSON):");
console.log(JSON.stringify(transacoes, null, 2));

let agrupado = agruparPorCategoria(transacoes);

console.log("\nResultado (Agrupado por Categoria)");
console.log(JSON.stringify(agrupado, null, 2));