import React, { createContext } from 'react';
import './index.css';
import { render } from '@testing-library/react';
import ButtonGenero from './components/ButtonGenero';

const sex={
     masculine:{
         image: "/images/masculine.png",
         color: "blue",
         value: "masculine"
     },
     female:{
         image: "images/female.png",
         color: "pink",
         value: "female"
     }
}
// we created context
export const Sex=React.createContext()
const App=()=>{
 return <div>
     <Sex.Provider value={sex.masculine}>
         <ButtonGenero></ButtonGenero>
     </Sex.Provider>
 </div>
}

render(<App></App>, document.getElementById("root"))
