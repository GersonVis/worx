import React, { useState } from 'react';
import './index.css';
import { render } from '@testing-library/react';

const Counter=()=>{
  const[counter, setCounter]=useState(0)
  function evtClick(){//event increment counter
    setCounter(counter+1)
  }
  return <div>
    <p>Presionado: {counter}</p>
    <button onClick={evtClick}>Aumentar</button>
  </div>
}

const App=()=>{
 return <div><Counter></Counter></div>
}

render(<App></App>, document.getElementById("root"))
