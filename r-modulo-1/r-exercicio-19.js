/*
    Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
    repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require('prompt-sync')();

// Função para validar o horário
function validarHorario(horario) {
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
    return regex.test(horario);
}

// Função para formatar o horário no formato HH.MM.SS
function formatarHorario(horario) {
    return horario.replace(/:/g, '.');
}

// Array para armazenar os horários válidos
let horarios = [];

// Ler 5 horários
for (let i = 0; i < 5; i++) {
    let horario;
    do {
        horario = prompt(`Digite o horário ${i + 1} (HH:MM:SS): `);
        if (!validarHorario(horario)) {
            console.log('Horário inválido. Por favor, digite no formato HH:MM:SS.');
        }
    } while (!validarHorario(horario));
    
    horarios.push(formatarHorario(horario));
}

// Exibir os horários no formato HH.MM.SS
console.log('Horários válidos no formato HH.MM.SS:');
horarios.forEach((horario, index) => {
    console.log(`Horário ${index + 1}: ${horario}`);
});