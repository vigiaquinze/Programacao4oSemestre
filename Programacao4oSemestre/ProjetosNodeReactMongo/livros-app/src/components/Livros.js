import React, { useEffect, useState } from 'react';
import { fetchLivros, criarLivro, atualizarLivro, deletarLivro } from '../services/livroService';

const Livros = () => {
    const [livros, setLivros] = useState([]);
    const [novoLivro, setNovoLivro] = useState({ titulo: '', autor: '', ano: '', genero: '' });
    const [livroParaAtualizar, setLivroParaAtualizar] = useState(null); // Para armazenar livro selecionado para atualizar
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadLivros = async () => {
            try {
                const data = await fetchLivros();
                setLivros(data);
            } catch (error) {
                setError(error.message);
            }
        };

        loadLivros();
    }, []);

    const handleCreate = async () => {
        try {
            const livroCriado = await criarLivro(novoLivro);
            setLivros([...livros, livroCriado]);
            setNovoLivro({ titulo: '', autor: '', ano: '', genero: '' }); // Limpa o formulário
        } catch (error) {
            setError(error.message);
        }
    };

    const handleUpdate = async (id) => {
        try {
            if (livroParaAtualizar) {
                const livroAtualizado = await atualizarLivro(id, livroParaAtualizar);
                setLivros(livros.map(livro => (livro._id === id ? livroAtualizado : livro)));
                setLivroParaAtualizar(null); // Limpa o estado de livro para atualizar
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deletarLivro(id);
            setLivros(livros.filter(livro => livro._id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Livros</h2>
            {error && <p>Error: {error}</p>}
            <ul>
                {livros.map(livro => (
                    <li key={livro._id}>
                        <strong>{livro.titulo}</strong>, de {livro.autor} ({livro.ano})
                        <button onClick={() => handleDelete(livro._id)}>Excluir</button>
                        <button onClick={() => setLivroParaAtualizar(livro)}>Editar</button>
                    </li>
                ))}
            </ul>
            <h2>Adicionar livro</h2>
            <input
                type="text"
                placeholder="Título"
                value={novoLivro.titulo}
                onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })}
            />
            <input
                type="text"
                placeholder="Autor"
                value={novoLivro.autor}
                onChange={(e) => setNovoLivro({ ...novoLivro, autor: e.target.value })}
            />
            <input
                type="number"
                placeholder="Ano"
                value={novoLivro.ano}
                onChange={(e) => setNovoLivro({ ...novoLivro, ano: e.target.value })}
            />
            <input
                type="text"
                placeholder="Gênero"
                value={novoLivro.genero}
                onChange={(e) => setNovoLivro({ ...novoLivro, genero: e.target.value })}
            />
            <button onClick={handleCreate}>Adicionar livro</button>

            {livroParaAtualizar && (
                <div>
                    <h2>Atualizar livro</h2>
                    <input
                        type="text"
                        placeholder="Título"
                        value={livroParaAtualizar.titulo}
                        onChange={(e) => setLivroParaAtualizar({ ...livroParaAtualizar, titulo: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Autor"
                        value={livroParaAtualizar.autor}
                        onChange={(e) => setLivroParaAtualizar({ ...livroParaAtualizar, autor: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Ano"
                        value={livroParaAtualizar.ano}
                        onChange={(e) => setLivroParaAtualizar({ ...livroParaAtualizar, ano: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Gênero"
                        value={livroParaAtualizar.genero}
                        onChange={(e) => setLivroParaAtualizar({ ...livroParaAtualizar, genero: e.target.value })}
                    />
                    <button onClick={() => handleUpdate(livroParaAtualizar._id)}>Update Book</button>
                </div>
            )}
        </div>
    );
};

export default Livros;
