import React, {Component}from 'react';
import './index.css';
import { render } from '@testing-library/react';

// this is other form of initialized a component
class App extends Component{
  render(){
    return <h1>Hola usuario</h1>
  }
}
render(<App></App>, document.getElementById("root"))
