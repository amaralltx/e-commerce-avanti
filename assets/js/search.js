document.querySelector('#search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = document.querySelector('#search-bar').value.trim();
    if (searchTerm) {
      document.querySelector('.search-result').textContent = `Você buscou por: '${searchTerm}'`;
    }
  });