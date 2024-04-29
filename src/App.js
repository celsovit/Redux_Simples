import React from 'react';

import Intervalo from './components/with_redux/Intervalo';
import Media from './components/with_redux/Media';
import Soma from './components/with_redux/Soma';
import Sorteio from './components/with_redux/Sorteio';

import './App.css';


function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>      
    </div>
  );
}

export default App;
