/*
    Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
    deverá ser capaz de interagir com o usuário através do console do navegador e manter
    um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
    informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
    1. Estrutura de Dados:
    ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
    cidade, quartos totais e quartos disponiveis.
    ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
    nomeCliente.
    2. Funcionalidades:
    ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
    ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
    disponíveis em uma cidade específica.
    ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
    deve diminuir o número de quartos disponiveis do hotel.
    ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
    aumentar o número de quartos disponiveis no hotel correspondente.
    ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
    cliente.
    3. Regras de Negócio:
    ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
    ○ As reservas devem ser identificadas por um ID único e associadas a um
    único hotel.

    4. Desafios Adicionais (Opcionais):
    ○ Implementar uma função de check-in e check-out que atualize a
    disponibilidade de quartos.
    ○ Gerar relatórios de ocupação para um hotel.
    ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
    avaliações dentro do objeto do hotel.
*/

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let hoteis = [];
let reservas = [];

let proximoHotelId = 1;
let proximaReservaId = 1;

function encontrarHotelPorId(id) {
    return hoteis.find(hotel => hotel.id === id);
}

function encontrarReservaPorId(id) {
    return reservas.find(reserva => reserva.idReserva === id);
}

function encontrarIndiceReservaPorId(id) {
    return reservas.findIndex(reserva => reserva.idReserva === id);
}

function adicionarHotel() {
    console.log("\nAdicionar Novo Hotel");

    rl.question("Nome do hotel: ", (nome) => {
        rl.question("Cidade: ", (cidade) => {
            rl.question("Número total de quartos: ", (quartosInput) => {
                
                let quartosTotais = parseInt(quartosInput);

                if (isNaN(quartosTotais) || quartosTotais <= 0) {
                    console.log("ERRO: Número de quartos inválido. Tente novamente.");
                    exibirMenu();
                    return;
                }

                let novoHotel = {
                    id: proximoHotelId,
                    nome: nome,
                    cidade: cidade,
                    quartosTotais: quartosTotais,
                    quartosDisponiveis: quartosTotais
                };
                
                hoteis.push(novoHotel);
                proximoHotelId++;

                console.log(`\n Hotel "${nome}" (ID: ${novoHotel.id}) adicionado com sucesso!`);
                exibirMenu();
            });
        });
    });
}

function buscarHoteisPorCidade() {
    console.log("\nBuscar Hotéis por Cidade");
    
    rl.question("Digite o nome da cidade: ", (cidade) => {
        
        let hoteisEncontrados = hoteis.filter(
            hotel => hotel.cidade.toLowerCase() === cidade.trim().toLowerCase()
        );

        if (hoteisEncontrados.length === 0) {
            console.log(`\nNenhum hotel encontrado em "${cidade}".`);
        } else {
            console.log(`\nHotéis Disponíveis em ${cidade}`);
            hoteisEncontrados.forEach(hotel => {
                console.log(
`ID: ${hotel.id} | ${hotel.nome} | Quartos Disponíveis: ${hotel.quartosDisponiveis} / ${hotel.quartosTotais}`
                );
            });
        }
        
        exibirMenu();
    });
}

function fazerReserva() {
    console.log("\nFazer Reserva");
    
    rl.question("Digite o ID do hotel: ", (idHotelInput) => {
        rl.question("Digite o nome do cliente: ", (nomeCliente) => {
            
            let idHotel = parseInt(idHotelInput);
            let hotel = encontrarHotelPorId(idHotel);

            if (!hotel) {
                console.log("ERRO: Hotel não encontrado com este ID.");
                exibirMenu();
                return;
            }

            if (hotel.quartosDisponiveis === 0) {
                console.log(`ERRO: O hotel "${hotel.nome}" está lotado.`);
                exibirMenu();
                return;
            }
            
            hotel.quartosDisponiveis--;

            let novaReserva = {
                idReserva: proximaReservaId,
                idHotel: idHotel,
                nomeCliente: nomeCliente
            };

            reservas.push(novaReserva);
            proximaReservaId++;

            console.log(`\nReserva (ID: ${novaReserva.idReserva}) feita para ${nomeCliente} no hotel "${hotel.nome}"!`);
            exibirMenu();
        });
    });
}

function cancelarReserva() {
    console.log("\nCancelar Reserva");
    
    rl.question("Digite o ID da reserva a ser cancelada: ", (idReservaInput) => {
        
        let idReserva = parseInt(idReservaInput);
        let indiceReserva = encontrarIndiceReservaPorId(idReserva);

        if (indiceReserva === -1) {
            console.log("ERRO: Reserva não encontrada com este ID.");
            exibirMenu();
            return;
        }

        let reservaCancelada = reservas[indiceReserva];
        let hotel = encontrarHotelPorId(reservaCancelada.idHotel);

        if (hotel) {
            hotel.quartosDisponiveis++;
        }

        reservas.splice(indiceReserva, 1);

        console.log(`\n Reserva (ID: ${idReserva}) de ${reservaCancelada.nomeCliente} foi cancelada.`);
        exibirMenu();
    });
}

function listarReservas() {
    console.log("\nLista de Todas as Reservas Ativas");

    if (reservas.length === 0) {
        console.log("Nenhuma reserva encontrada no sistema.");
        exibirMenu();
        return;
    }

    reservas.forEach(reserva => {
        let hotel = encontrarHotelPorId(reserva.idHotel);
        
        let nomeHotel = hotel ? hotel.nome : `Hotel (ID: ${reserva.idHotel} - NÃO ENCONTRADO)`;
        
        console.log(
`ID Reserva: ${reserva.idReserva} | Cliente: ${reserva.nomeCliente} | Hotel: ${nomeHotel} (${hotel ? hotel.cidade : 'N/A'})`
        );
    });

    exibirMenu();
}

function sair() {
    console.log("\nObrigado por usar o sistema. Até logo!");
    rl.close();
}

function exibirMenu() {
    console.log("\n╔═══════════════════════════════════╗");
    console.log("║     Sistema de Reserva de Hotéis    ║");
    console.log("╠═══════════════════════════════════╣");
    console.log("║ 1. Adicionar Hotel                  ║");
    console.log("║ 2. Buscar Hotéis por Cidade         ║");
    console.log("║ 3. Fazer Reserva                    ║");
    console.log("║ 4. Cancelar Reserva                 ║");
    console.log("║ 5. Listar Todas as Reservas         ║");
    console.log("║ S. Sair                             ║");
    console.log("╚═══════════════════════════════════╝");
    
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao.trim().toUpperCase()) {
            case '1':
                adicionarHotel();
                break;
            case '2':
                buscarHoteisPorCidade();
                break;
            case '3':
                fazerReserva();
                break;
            case '4':
                cancelarReserva();
                break;
            case '5':
                listarReservas();
                break;
            case 'S':
                sair();
                break;
            default:
                console.log("Opção inválida! Por favor, tente novamente.");
                exibirMenu();
        }
    });
}

function carregarDadosIniciais() {
    hoteis.push(
        { id: proximoHotelId++, nome: "Hotel Plaza", cidade: "São Paulo", quartosTotais: 100, quartosDisponiveis: 80 },
        { id: proximoHotelId++, nome: "Praia Hotel", cidade: "Rio de Janeiro", quartosTotais: 50, quartosDisponiveis: 10 },
        { id: proximoHotelId++, nome: "Hotel Central", cidade: "São Paulo", quartosTotais: 70, quartosDisponiveis: 70 }
    );
}

console.log("Bem-vindo ao Sistema de Reservas!");
carregarDadosIniciais();
exibirMenu();