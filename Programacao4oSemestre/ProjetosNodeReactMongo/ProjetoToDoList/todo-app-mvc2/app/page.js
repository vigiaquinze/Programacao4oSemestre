'use client';

import { useState, useEffect } from 'react';
import { getToDos, createToDo, updateToDo, deleteToDo } from '@/controllers/ToDoController'; // Verifique o caminho aqui

export default function Home() {
  const [todos, setToDos] = useState([]);
  const [newTitleToDo, setNewTitleToDo] = useState('');
  const [newDescriptionToDo, setNewDescriptionToDo] = useState('');

  useEffect(() => {
    // Função para buscar as tarefas quando o componente é montado
    const fetchToDos = async () => {
      try {
        const data = await getToDos();
        setToDos(data);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    fetchToDos();
  }, []);

  const handleAddToDo = async () => {
    try {
      const newToDo = await createToDo({
        title: newTitleToDo,
        description: newDescriptionToDo,
      });
      setToDos([...todos, newToDo]);
      setNewTitleToDo('');
      setNewDescriptionToDo('');
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const handleUpdateToDo = async (id, currentStatus) => {
    try {
      const updatedToDo = await updateToDo(id, { completed: !currentStatus });
      setToDos(todos.map(todo => (todo._id === id ? updatedToDo : todo)));
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  const handleDeleteToDo = async (id) => {
    try {
      await deleteToDo(id);
      setToDos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTitleToDo}
        onChange={(e) => setNewTitleToDo(e.target.value)}
      />
      <input
        type="text"
        value={newDescriptionToDo}
        onChange={(e) => setNewDescriptionToDo(e.target.value)}
      />
      <button onClick={handleAddToDo}>Adicionar Tarefa</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title} - {todo.description} - {todo.completed ? 'Concluída' : 'Pendente'}
            <button onClick={() => handleUpdateToDo(todo._id, todo.completed)}>Concluir/Desmarcar</button>
            <button onClick={() => handleDeleteToDo(todo._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
