const moodTextArea = document.getElementById('mood-textarea');
const searchButton = document.getElementById('search-button');

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    // Adiciona um ouvinte de evento para o clique no botão de busca
    searchButton.addEventListener('click', handleSearch);
}

function handleSearch() {
    const mood = moodTextArea.value.trim();
    if (!mood) {
        alert('Por favor, descreva seu humor para encontrar o filme perfeito!');
        return;
    }   