import React, {useState, useEffect} from 'react';
import './index.css';
import { render } from '@testing-library/react';

const Counter=()=>{
  const [counter, setCounter]=useState(0)
  useEffect(()=>{
    console.log("i have updated")
    return ()=>{
      alert("i have deleted")
    }
  }, [])
  // we can use [] if we want execute just one time
  return <div>
    <p>Counter: {counter}</p>
    <button onClick={()=>setCounter(counter+1)}>+</button>
    <button onClick={()=>setCounter(counter-1)}>-</button>
  </div>
}

const App=()=>{
  const [showHide, setShowHide]=useState(true)
 return <div>
    <button onClick={()=>setShowHide(showHide==false)}>Eliminar</button>
    {showHide && <Counter></Counter>}
 </div>

}

render(<App></App>, document.getElementById("root"))
