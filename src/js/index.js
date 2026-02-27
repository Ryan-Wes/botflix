const moodTextArea = document.getElementById('mood-textarea');
const searchButton = document.getElementById('search-button');

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {

    moodTextArea.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSearch();
        }
    });

    // Adiciona um ouvinte de evento para o clique no botão de busca
    searchButton.addEventListener('click', handleSearch);
}

async function handleSearch() {
    const mood = moodTextArea.value.trim();
    if (!mood) {
        alert('Por favor, descreva seu humor para encontrar o filme perfeito!');
        return;
    }

    const response = await fetch('https://wryan.app.n8n.cloud/webhook-test/botflix', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userPrompt: mood })
    });

    
};




