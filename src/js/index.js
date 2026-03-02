// DOM Elements
const moodInput = document.getElementById('mood-input');
const searchButton = document.getElementById('search-button');
// ...código removido do microfone...

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
    updateSearchButton();
});

// Event Listeners
function setupEventListeners() {
    // Input change listener
    moodInput.addEventListener('input', function () {
        updateSearchButton();
    });

    // Enter key listener
    moodInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!searchButton.disabled) {
                handleSearch();
            }
        }
    });

    // Search button listener
    searchButton.addEventListener('click', handleSearch);

    // ...código removido do microfone...
}

// Update search button state
function updateSearchButton() {
    const hasText = moodInput.value.trim().length > 0;
    searchButton.disabled = !hasText;
}

// Handle search functionality
async function handleSearch() {
    const mood = moodInput.value.trim();

    if (!mood) {
        alert('Por favor, descreva o que você quer assistir!');
        return;
    }

    // Show loading state
    const originalText = searchButton.innerHTML;
    searchButton.innerHTML = '<span style="animation: pulse 1s infinite;">🔍 Buscando...</span>';
    searchButton.disabled = true;

    const prompt = JSON.stringify({ userPrompt: mood });

    try {
        // Fazer POST para o webhook do N8N (SEU LINK)
        const response = await fetch('https://wryan.app.n8n.cloud/webhook/botflix', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: prompt
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`HTTP ${response.status}: ${text}`);
        }

        const data = await response.json();

        // Novo formato: data.results (TMDB padrão)
        if (data && Array.isArray(data.results) && data.results.length > 0) {
            const movie = data.results[0];

            let posterUrl = movie.poster_path || '';
            if (posterUrl && !/^https?:\/\//.test(posterUrl)) {
                posterUrl = `https://image.tmdb.org/t/p/w500${posterUrl}`;
            }

            // Exibe o resultado
            const resultsDiv = document.getElementById('results');
            const moviesGrid = document.getElementById('movies-grid');
            if (resultsDiv && moviesGrid) {
                resultsDiv.style.display = 'block';
                moviesGrid.innerHTML = `
                    <div class="movie-card">
                        <div class="movie-poster">
                            ${posterUrl ? `<img src="${posterUrl}" alt="${movie.title}">` : '<div class="no-poster">Sem imagem</div>'}
                        </div>
                        <div class="movie-info">
                            <h4 class="movie-title">${movie.title}</h4>
                            <p class="movie-overview">${movie.overview || 'Sem descrição disponível.'}</p>
                            <p class="movie-rating">⭐ ${typeof movie.vote_average === 'number' ? movie.vote_average.toFixed(1) : 'N/A'} / 10</p>
                        </div>
                    </div>
                `;
            } else {
                alert('Não foi possível exibir o resultado. Elementos não encontrados.');
            }
        } else {
            alert('Nenhum filme encontrado para sua busca.');
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
        alert('Erro ao buscar filmes. Tente novamente.');
    } finally {
        // Reset button
        searchButton.innerHTML = originalText;
        updateSearchButton();
    }
}

// Initialize typing effect
//addTypingEffect();