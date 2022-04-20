import React from 'react';
import './index.css';
import { render } from '@testing-library/react';


const App=()=>{
 return <div>HOla mundo</div>

}

render(<App></App>, document.getElementById("root"))
