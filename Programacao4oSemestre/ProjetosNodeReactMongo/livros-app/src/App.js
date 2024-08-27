import React from 'react';
import './App.css';
import Livros from './components/Livros'; // Ajuste o caminho conforme necessário

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Minha Aplicação de Livros</h1>
                <Livros />
            </header>
        </div>
    );
}

export default App;
