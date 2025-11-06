/*
    Você recebe dois objetos que representam o inventário de duas lojas diferentes:
    inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
    item em estoque. Escreva uma função que combine os inventários em um único objeto.
    Se um item aparecer em ambas as lojas, some as quantidades.
*/

function combinarInventarios(lojaA, lojaB) {
    
    let inventarioTotal = { ...lojaA };

    for (let item of Object.keys(lojaB)) {
        
        let quantidadeB = lojaB[item];
        
        inventarioTotal[item] = (inventarioTotal[item] || 0) + quantidadeB;
    }
    
    return inventarioTotal;
}

let inventarioLojaA = {
    maca: 5,
    banana: 15,
    pera: 10
};

let inventarioLojaB = {
    maca: 10,
    uva: 20,
    pera: 5
};

console.log("Inventários");
console.log("Loja A:", inventarioLojaA);
console.log("Loja B:", inventarioLojaB);

let inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);

console.log("\nInventário Combinado (Total)");
console.log(inventarioCombinado);