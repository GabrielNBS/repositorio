import React, { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [tarefaTemp, setTarefaTemp] = useState('');


  function cadastrarTarefas() {

    if (tarefaTemp.trim() !== '') {
      setTarefas([...tarefas, tarefaTemp]);
      setTarefaTemp('');
    }
  }

  return (
    <div className="App">
      <input
        data-testid="campo-tarefa"
        type="text"
        value={tarefaTemp}
        onChange={(evento) => setTarefaTemp(evento.target.value)}
      />
      <button data-testid="btn-cadastrar" onClick={cadastrarTarefas} type="button">
        Cadastrar
      </button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
