import React, { useState } from 'react';

import Intervalo from './components/without_redux/Intervalo';
import Media from './components/without_redux/Media';
import Soma from './components/without_redux/Soma';
import Sorteio from './components/without_redux/Sorteio';

import '../App.css';


function App() {

  const [min, setMin] = useState(100)
  const [max, setMax] = useState(1000)

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo 
            min={ min }  /* valor exibido na tela */
            max={ max } 
            onMinChanged={ setMin }  /* passa referência da função setMin/setMax para Intervalo */
            onMaxChanged={ setMax } 
        />
      </div>
      <div className="linha">
        <Media min={ min } max={ max } />
        <Soma min={ min } max={ max } />
        <Sorteio min={ min } max={ max } />
      </div>      
    </div>
  );
}

export default App;
