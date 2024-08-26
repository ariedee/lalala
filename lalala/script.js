// Defina a data de início do relacionamento
const startDate = new Date('2024-07-29'); // Substitua pela data real de início

function calculateDaysTogether() {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const daysTogether = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    // Atualiza o contador de dias
    document.getElementById('days-counter').textContent = daysTogether;
    
    // Atualiza a data de início
    const startDateFormatted = startDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    document.getElementById('start-date').textContent = startDateFormatted;
}

function updateSecondsCounter() {
    const currentDate = new Date();
    const timeDifferenceInSeconds = Math.floor((currentDate - startDate) / 1000);
    document.getElementById('seconds-counter').textContent = timeDifferenceInSeconds;
}

document.addEventListener('DOMContentLoaded', () => {
    calculateDaysTogether();
    updateSecondsCounter();
    setInterval(updateSecondsCounter, 1000); // Atualiza o contador a cada segundo
    createHearts();
});