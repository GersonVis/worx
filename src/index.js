import React from 'react';
import './index.css';
import { render } from '@testing-library/react';


const Saludo=({name, lang})=>{
  return <h1>
    {  lang==="es" && "Hola: "}
    {  lang==="en" && "Hello: "}
    {name}
    </h1>
}
Saludo.defaultProps={
  name:"gerson",
  lang: "es"
}
const App=()=>{
 return <div><Saludo></Saludo></div>

}

render(<App></App>, document.getElementById("root"))
