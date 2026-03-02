// DOM Elements
const moodInput = document.getElementById('mood-input');
const searchButton = document.getElementById('search-button');

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
  setupEventListeners();
  updateSearchButton();
});

// Event Listeners
function setupEventListeners() {
  moodInput.addEventListener('input', updateSearchButton);

  moodInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!searchButton.disabled) handleSearch();
    }
  });

  searchButton.addEventListener('click', handleSearch);
}

// Update search button state
function updateSearchButton() {
  const hasText = moodInput.value.trim().length > 0;
  searchButton.disabled = !hasText;
}

// Detect language (boa o suficiente pra PT/EN/ES/FR e fallback)
function detectLanguageFromText(text) {
  const t = (text || '').toLowerCase();

  // Francês
  if (/\b(je|veux|film|aujourd'hui|comédie|thriller|s'il vous plaît)\b/i.test(t)) {
    return 'fr-FR';
  }

  // Espanhol
  if (/\b(quiero|película|ver|acción|suspenso|gracioso|hoy|por favor)\b/i.test(t)) {
    return 'es-ES';
  }

  // Português
  if (/[ãõçáéíóúâêôà]/i.test(t) ||
      /\b(que|pra|você|tô|tá|filme|quero|assistir|engraçado|ação|suspense)\b/i.test(t)) {
    return 'pt-BR';
  }

  // Se não detectou nada específico → assume inglês
  return 'en-US';
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

  // idioma baseado no texto digitado (com fallback pro navegador)
  const language = detectLanguageFromText(mood);

  try {
    // Fazer POST para o webhook do N8N
    const response = await fetch('https://wryan.app.n8n.cloud/webhook/botflix', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userPrompt: mood, language })
    });

    if (!response.ok) { 
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    const data = await response.json();

    // TMDB padrão: data.results
    if (data && Array.isArray(data.results) && data.results.length > 0) {
      const movie = data.results[0];

      let posterUrl = movie.poster_path || '';
      if (posterUrl && !/^https?:\/\//.test(posterUrl)) {
        posterUrl = `https://image.tmdb.org/t/p/w500${posterUrl}`;
      }

      const resultsDiv = document.getElementById('results');
      const moviesGrid = document.getElementById('movies-grid');

      if (resultsDiv && moviesGrid) {
        resultsDiv.style.display = 'block';

        // às vezes o TMDB traz title vazio em alguns idiomas; fallback pro original_title
        const title = movie.title || movie.original_title || 'Título indisponível';

        moviesGrid.innerHTML = `
          <div class="movie-card">
            <div class="movie-poster">
              ${posterUrl ? `<img src="${posterUrl}" alt="${title}">` : '<div class="no-poster">Sem imagem</div>'}
            </div>
            <div class="movie-info">
              <h4 class="movie-title">${title}</h4>
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
    searchButton.innerHTML = originalText;
    updateSearchButton();
  }
}