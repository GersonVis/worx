import React, { useEffect, useState } from 'react';
import './index.css';
import { render } from '@testing-library/react';
import InputText from './Components/InputText';
import Counter from './Components/Counter';

export const ProviderForm = React.createContext()
const App = () => {
    const [name, setName] = useState("")
    const [counter, setCounter]=useState(0)
    useEffect(()=>{},[])
    return <div>
        <ProviderForm.Provider value={{name, setName, counter, setCounter}}>
           <div onSubmit={(evt)=>{evt.preventDefault()}}>
               <InputText id="name"></InputText>
               <Counter value="Increment"></Counter>
               <Counter action={-1} value="Decrement"></Counter>
           </div>
        </ProviderForm.Provider>
        <p>Name: {name}</p>
        <p>Counter: {counter}</p>
    </div>

}
//<Counter action="-1" value="Decrement"></Counter>
render(<App></App>, document.getElementById("root"))
