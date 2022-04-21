import React, { useEffect, useState } from 'react';
import './index.css';
import { render } from '@testing-library/react';

const GetText=()=>{
  const[name, setName]=useState('')
  return <dvi>
    <input type="text" placeholder='name' onChange={(evt)=>setName(evt.target.value)}></input>
    <p>Name: {name}</p>
  </dvi>
}

const App=()=>{
 return <div><GetText></GetText></div>

}

render(<App></App>, document.getElementById("root"))
