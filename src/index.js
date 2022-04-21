import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { render } from '@testing-library/react';
import Sorprise from './components/Sorprise';

const App = () => {
    const[showSorprise, setShowSorprise]=useState(false)
    return <div>
        <button onClick={()=>setShowSorprise(showSorprise==false)}>Show sorprise</button>
        {showSorprise && <Sorprise></Sorprise>}
        </div>

}

render(<App></App>, document.getElementById("root"))
