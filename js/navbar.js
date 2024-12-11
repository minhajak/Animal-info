const searchInput = document.getElementById('search');
const searchSuggestions = document.getElementById('search-suggestions');

// Sample data for suggestions
const suggestions = [
  "lion",
  "bear",
  "sheep",
  "dog",
  "tiger"

];

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.trim().toLowerCase();
  if (searchTerm.length > 0) {
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(searchTerm));
    searchSuggestions.innerHTML = '';
    filteredSuggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.textContent = suggestion;
      li.addEventListener('click', () => {
        searchInput.value = suggestion;
        animalInfo.value = ``;
        animalSummary.value =``;
        setAnimalDisplay(suggestion)
        searchSuggestions.style.display = 'none';
      });
      searchSuggestions.appendChild(li);
    });
    searchSuggestions.style.display = 'block';
  } else {
    searchSuggestions.style.display = 'none';
  }
});

document.addEventListener('click', (e) => {
    if (e.target !== searchInput && !searchSuggestions.contains(e.target)) {
      searchSuggestions.style.display = 'none';
    }
  });

  searchInput.onmouseenter =  () => {
    searchSuggestions.style.width = `400px`
    searchSuggestions.style.transition=`width 0.5s`
  }
  searchInput.onmouseleave =  () => {
    searchSuggestions.style.width = `334px`
    searchSuggestions.style.transition=`width 0.5s`
  }
