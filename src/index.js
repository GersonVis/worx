import React, { createContext, useState } from 'react';
import './index.css';
import { render } from '@testing-library/react';
import ButtonGenero from './components/ButtonGenero';

const sexes={
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
    const[sex, setSex]=useState(sexes.female)
 return <div>
     <Sex.Provider value={sex}>
         <ButtonGenero></ButtonGenero>
         {/*the changes affect everything inside the provider*/}
         <button onClick={()=>setSex(sexes.masculine)}>Masculine</button>
         <button onClick={()=>setSex(sexes.female)}>Female</button>
     </Sex.Provider>
 </div>
}

render(<App></App>, document.getElementById("root"))
