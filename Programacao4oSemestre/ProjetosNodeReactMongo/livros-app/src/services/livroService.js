import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Função para buscar todos os livros
export const fetchLivros = async () => {
    try {
        const response = await axios.get(`${API_URL}/livros`);
        return response.data;
    } catch (error) {
        console.error('Error fetching livros:', error);
        throw error;
    }
};

// Função para criar um novo livro
export const criarLivro = async (livro) => {
    try {
        const response = await axios.post(`${API_URL}/livros`, livro);
        return response.data;
    } catch (error) {
        console.error('Error creating livro:', error);
        throw error;
    }
};

// Função para atualizar um livro
export const atualizarLivro = async (id, livroAtualizado) => {
    try {
        const response = await axios.patch(`${API_URL}/livros/${id}`, livroAtualizado);
        return response.data;
    } catch (error) {
        console.error('Error updating livro:', error);
        throw error;
    }
};

// Função para substituir um livro existente
export const substituirLivro = async (id, livroSubstituido) => {
    try {
        const response = await axios.put(`${API_URL}/livros/${id}`, livroSubstituido);
        return response.data;
    } catch (error) {
        console.error('Error replacing livro:', error);
        throw error;
    }
};


// Função para deletar um livro
export const deletarLivro = async (id) => {
    try {
        await axios.delete(`${API_URL}/livros/${id}`);
    } catch (error) {
        console.error('Error deleting livro:', error);
        throw error;
    }
};
