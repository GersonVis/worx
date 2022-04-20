import React from 'react';
import './index.css';
import { render } from '@testing-library/react';


const Saludo=({name="carlos", lang="es"})=>{
  const greeting=lang==="es"?"Hola: ":"Hello: ";
  return <h1>
    {greeting+name}
    </h1>
}
const App=()=>{
 return <div><Saludo></Saludo></div>

}

render(<App></App>, document.getElementById("root"))
