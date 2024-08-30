document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/livros';

    // Preenche o formulário com os dados do livro a ser atualizado
    const id = new URLSearchParams(window.location.search).get('id');
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(livro => {
            document.getElementById('livroId').value = livro._id;
            document.getElementById('titulo').value = livro.titulo;
            document.getElementById('autor').value = livro.autor;
            document.getElementById('ano').value = livro.ano;
            document.getElementById('genero').value = livro.genero;
        })
        .catch(error => console.error('Erro ao buscar livro:', error));

    // Função para atualizar o livro
    document.getElementById('livroUP').addEventListener('submit', function (event) {
        event.preventDefault();

        const id = document.getElementById('livroId').value;
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const ano = document.getElementById('ano').value;
        const genero = document.getElementById('genero').value;

        const livro = { titulo, autor, ano, genero };

        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livro)
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = 'index.html';
                } else {
                    console.error('Erro ao atualizar livro:', response.statusText);
                }
            })
            .catch(error => console.error('Erro ao atualizar livro:', error));
    });
});
