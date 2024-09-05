'use client';


import { useState, useEffect } from 'react';




export default function Home() {

  useEffect(() => {
    getTodos();
  }, []);


  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Adicionar Tarefa</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title} - {todo.description} - {todo.status}
            {/* button - concluida - lança o método para editar todo*/}
            <button onClick={() => deleteTodo(todo._id, todo.status)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
