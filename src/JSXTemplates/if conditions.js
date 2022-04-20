import React from 'react';
import './index.css';
import { render } from '@testing-library/react';
//used props and conditions
const SaludoConditions=({lang})=>{
    const languages={
     en: "hello",
     es: "Hola"
   }
    return languages[lang];
}

// we can use too if of this form
const IfOtherForm=({lang})=>{
  const body=lang==="es"?"español":"English"
  return  <h1>{body}</h1>;
}
/*<div>
    {lang==="en" && <h1>English</h1>}
    {lang==="es" && <h1>Español</h1>}
  </div> */
const IfThirdForm=({lang})=>{
  if(lang==="en")return <h1>English</h1>
  else 
  if (lang==="es") return <h1>Español</h1>
  else return <h1>Español</h1>
}

const Saludo=()=>{
  //all inside curly brases is a valid java expression
  const nombre="gerson"
  return <h2>Hola {nombre}</h2>
}

const App=()=>{
  let body=<h1>Saludo condicion: <SaludoConditions lang="en"></SaludoConditions>
   Saludo normal: <Saludo></Saludo>
   If other form: <IfOtherForm lang="en"></IfOtherForm> 
   If third form: <IfThirdForm lang="en"></IfThirdForm>
   </h1>
  return body
}

render(<App></App>, document.getElementById("root"))
