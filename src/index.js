import React from 'react';
import './index.css';
import { render } from '@testing-library/react';
import App from './App';

const Principal=()=>{
    return <>
    <App></App>
    </>
}

render(<Principal></Principal>, document.getElementById("root"))
