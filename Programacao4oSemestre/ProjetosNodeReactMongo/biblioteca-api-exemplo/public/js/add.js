document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/livros';

    document.getElementById('livroCad').addEventListener('submit', function (event) {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const ano = document.getElementById('ano').value;
        const genero = document.getElementById('genero').value;

        const livro = { titulo, autor, ano, genero };

        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livro)
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = 'index.html';
                } else {
                    console.error('Erro ao adicionar livro:', response.statusText);
                }
            })
            .catch(error => console.error('Erro ao adicionar livro:', error));
    });
});
