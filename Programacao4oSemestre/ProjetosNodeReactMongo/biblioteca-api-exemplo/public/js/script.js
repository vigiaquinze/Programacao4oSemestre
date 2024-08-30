document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/livros';

    // Função para buscar os livros na API e renderizar na tabela
    function buscarLivros() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(livros => {
                const tabelaCorpo = document.getElementById('livrosCorpo');
                if (!tabelaCorpo) return; // Adiciona verificação para evitar erros

                tabelaCorpo.innerHTML = '';

                livros.forEach(livro => {
                    const linha = document.createElement('tr');

                    const idCelula = document.createElement('td');
                    idCelula.textContent = livro._id;

                    const tituloCelula = document.createElement('td');
                    tituloCelula.textContent = livro.titulo;

                    const autorCelula = document.createElement('td');
                    autorCelula.textContent = livro.autor;

                    const anoCelula = document.createElement('td');
                    anoCelula.textContent = livro.ano;

                    const generoCelula = document.createElement('td');
                    generoCelula.textContent = livro.genero;

                    const acoesCelula = document.createElement('td');
                    const updateButton = document.createElement('button');
                    updateButton.classList.add('update');
                    updateButton.textContent = 'Atualizar';
                    updateButton.onclick = () => window.location.href = `update.html?id=${livro._id}`;

                    const deleteButton = document.createElement('button');
                    deleteButton.classList.add('delete');
                    deleteButton.textContent = 'Deletar';
                    deleteButton.onclick = () => deletarLivro(livro._id);

                    acoesCelula.appendChild(updateButton);
                    acoesCelula.appendChild(deleteButton);

                    linha.appendChild(idCelula);
                    linha.appendChild(tituloCelula);
                    linha.appendChild(autorCelula);
                    linha.appendChild(anoCelula);
                    linha.appendChild(generoCelula);
                    linha.appendChild(acoesCelula);

                    tabelaCorpo.appendChild(linha);
                });
            })
            .catch(error => console.error('Erro ao buscar livros:', error));
    }

    // Função para deletar um livro
    function deletarLivro(id) {
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    buscarLivros();
                } else {
                    console.error('Erro ao deletar livro:', response.statusText);
                }
            })
            .catch(error => console.error('Erro ao deletar livro:', error));
    }

    // Chama a função para buscar e renderizar os livros ao carregar a página
    buscarLivros();
});
